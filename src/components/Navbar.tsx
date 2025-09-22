import React, {
  useState,
  useCallback,
  memo,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged, User } from "firebase/auth";
import LOGO from "../Assets/Logo-BG.jpg"; // Adjust path as needed

/* ---------- Types ---------- */
interface NavLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
  isMobile?: boolean;
}

interface NavButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

interface ApplyButtonProps {
  hasApplied: boolean;
  onApplySuccess: () => void;
  isMobile?: boolean;
}

interface NavbarProps {
  profileImage?: string | null;
}

/* ---------- Helpers ---------- */

/**
 * Simple reusable hook to sync a value with localStorage.
 * It uses JSON.stringify/parse internally.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
     
    }
  }, [key, value]);

  return [value, setValue] as const;
}

/* ---------- NavLink ---------- */
const NavLink: React.FC<NavLinkProps> = memo(({ to, label, onClick, isMobile = false }) => {
  const location = useLocation();

  // Support both normal paths and hash-links like "/#why-wyffle"
  const targetHasHash = to.includes("#");
  const isActive = targetHasHash
    ? `${location.pathname}${location.hash}` === to
    : location.pathname === to;

  const baseClass = `font-medium transition-colors duration-200 ${
    isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
  }`;

  if (isMobile) {
    return (
      <Link to={to} className={`block py-2 ${baseClass}`} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Link to={to} className={baseClass}>
        {label}
      </Link>
    </motion.div>
  );
});
NavLink.displayName = "NavLink";

/* ---------- NavButton (styled) ---------- */
const NavButton: React.FC<NavButtonProps> = memo(({ onClick, children, className = "", disabled = false }) => (
  <motion.button
    className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 
                ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    whileHover={!disabled ? { scale: 1.05 } : {}}
    whileTap={!disabled ? { scale: 0.95 } : {}}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </motion.button>
));
NavButton.displayName = "NavButton";

/* ---------- ApplyButton ---------- */
const ApplyButton: React.FC<ApplyButtonProps> = memo(({ hasApplied, isMobile = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (hasApplied) return;

    // Navigate to apply page (or to confirmation if you want)
    // If you prefer to submit directly from here, replace with API call and navigate after success.
    navigate("/apply");
  };

  return (
    <NavButton onClick={handleClick} disabled={hasApplied} className={isMobile ? "w-full" : ""}>
      {hasApplied ? "Applied!" : "Apply Now"}
    </NavButton>
  );
});
ApplyButton.displayName = "ApplyButton";

/* ---------- Navbar component ---------- */
const Navbar: React.FC<NavbarProps> = ({ profileImage = null }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Sync hasApplied with localStorage
  const [hasApplied, setHasApplied] = useState<boolean>(() => {
    return localStorage.getItem("hasApplied") === "true";
  });

  // If you prefer the hook:
  // const [hasApplied, setHasApplied] = useLocalStorage<boolean>("hasApplied", false);

  const navigate = useNavigate();
  const auth = getAuth();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLButtonElement | null>(null);

  // extra profile sources from localStorage (optional)
  const profileimage = localStorage.getItem("Profile");
  const googlepicture = localStorage.getItem("googleProfile");

  // track user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  // Click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        avatarRef.current &&
        !avatarRef.current.contains(target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // scroll effect
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { to: "/#why-wyffle", label: "Why Wyffle" },
    { to: "/discord", label: "Discord Server" },
    { to: "/event", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  const handleLogin = () => {
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

 // Get userData from localStorage
const userDataString = localStorage.getItem("userData");

// Parse it as JSON
const userData = userDataString ? JSON.parse(userDataString) : null;

// Access isAdmin safely
const isAdmin = userData?.isAdmin === true; // true if isAdmin is true, else false


  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userData");
      setUser(null);
      setShowDropdown(false);
      setIsMobileMenuOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleDashboard = () => {
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
    navigate("/student-dashboard");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleApplySuccess = useCallback(() => {
    setHasApplied(true);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg py-3" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              navigate("/");
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center p-1 ">
              <img src={LOGO} alt="logo" className="rounded-md w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-bold gradient-text bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Wyffle
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-20 items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}
          </div>

          {/* Apply button (desktop) */}
          <div className="hidden md:block ml-52 h-12 w-36">
            <ApplyButton hasApplied={hasApplied} onApplySuccess={handleApplySuccess} />
          </div>

          {/* Right side for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <NavButton onClick={handleLogin}>Login</NavButton>
            ) : (
              <div className="relative" ref={dropdownRef}>
                {/* Avatar */}
                <button
                  ref={avatarRef}
                  onClick={toggleDropdown}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 focus:outline-none transition-all duration-300 border-purple-700 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  aria-expanded={showDropdown}
                  aria-haspopup="true"
                  type="button"
                >
                  {profileImage || user.photoURL ? (
                    <img
                      src={profileImage || profileimage || googlepicture || user.photoURL || ""}
                      alt="user avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center w-full h-full font-bold">
                      {user.displayName
                        ? user.displayName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                        : user.email?.[0].toUpperCase() || "U"}
                    </span>
                  )}
                </button>

              {/* Dropdown */}
{showDropdown && (
  <motion.div
    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50 origin-top-right"
    initial={{ opacity: 0, y: -10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.2 }}
  >
    <div className="px-4 py-2 border-b border-gray-100">
      <p className="text-sm font-medium text-gray-800 truncate">
        Hey, {user.displayName || user.email}
      </p>
    </div>

    <button
      onClick={handleDashboard}
      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
      </svg>
      Dashboard
    </button>

    {/* Admin Link: only show if user is admin */}
    {/* 
      Replace the following condition with your actual admin check logic.
      For example, you might store admin status in a custom claim or in localStorage.
      Example using localStorage:
      const isAdmin = localStorage.getItem("isAdmin") === "true";
    */}
   {isAdmin && (
  <button
    onClick={() => navigate("/admin")}
    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
    type="button"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    Admin Dashboard
  </button>
)}

    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
      </svg>
      Logout
    </button>
  </motion.div>
)}

              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 p-4 glass-effect rounded-xl shadow-lg"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                isMobile={true}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowDropdown(false);
                }}
              />
            ))}

            <div className="mt-4 space-y-3 pt-4 border-t border-gray-100">
              <ApplyButton hasApplied={hasApplied} onApplySuccess={handleApplySuccess} isMobile={true} />

              {!user ? (
                <NavButton onClick={handleLogin} className="w-full">
                  Login
                </NavButton>
              ) : (
                <div className="relative text-center">
                  {/* Avatar for mobile */}
                  <button
                    onClick={toggleDropdown}
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-600 focus:outline-none mx-auto block focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    aria-expanded={showDropdown}
                    aria-haspopup="true"
                    type="button"
                  >
                    {profileImage || user.photoURL ? (
                      <img src={profileImage || profileimage || googlepicture || ""} alt="user avatar" className="w-full h-full object-cover" />
                    ) : (
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center w-full h-full font-bold">
                        {user.displayName ? user.displayName.split(" ").map((n) => n[0]).join("").toUpperCase() : user.email?.[0].toUpperCase() || "U"}
                      </span>
                    )}
                  </button>

                  {/* Dropdown for mobile */}
                  {showDropdown && (
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-48 bg-white rounded-lg shadow-lg border py-2 z-50 origin-top"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      ref={dropdownRef}
                    >
                      <p className="py-2 text-sm font-medium text-gray-800 text-center border-b border-gray-100 truncate">
                        Hey, {user.displayName || user.email}
                      </p>
                      <button onClick={handleDashboard} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-2" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                        </svg>
                        Dashboard
                      </button>
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center gap-2" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
                        </svg>
                        Logout
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Custom CSS for glass effect */}
      <style>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        @media (max-width: 768px) {
          .glass-effect {
            background: rgba(255, 255, 255, 0.98);
          }
        }
        .gradient-text {
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </motion.nav>
  );
};

export default memo(Navbar);
