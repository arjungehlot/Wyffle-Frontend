import { Link } from 'react-router-dom';

interface DashboardHeaderProps {
  fullName: string;
  institute: string | undefined;
  profileImage: string | null | undefined;
  getInitials: (name: string | undefined) => string;
}

const DashboardHeader = ({ fullName, institute, profileImage, getInitials }: DashboardHeaderProps) => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">W</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Wyffle</span>
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600 font-medium">Student Dashboard</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-semibold text-gray-900">{fullName}</p>
            <p className="text-sm text-gray-500">
              {institute || 'Student'}
            </p>
          </div>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {getInitials(fullName)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
);

export default DashboardHeader;
