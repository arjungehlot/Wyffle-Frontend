import React from "react";
import { Search, MessageSquare, Users, BookOpen, Briefcase } from "lucide-react";

const Forums: React.FC = () => {
  const categories = [
    { name: "General Discussion", icon: MessageSquare, color: "from-purple-500 to-indigo-500" },
    { name: "Student Life", icon: Users, color: "from-pink-500 to-red-500" },
    { name: "Learning Resources", icon: BookOpen, color: "from-green-500 to-emerald-500" },
    { name: "Career Guidance", icon: Briefcase, color: "from-yellow-500 to-orange-500" },
  ];

  const discussions = [
    { title: "Best resources for learning React?", author: "Arjun", replies: 12, time: "2h ago" },
    { title: "How to prepare for Capgemini placement?", author: "Priya", replies: 8, time: "5h ago" },
    { title: "Tips for hackathon beginners?", author: "Rohit", replies: 5, time: "1d ago" },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Wyffle Forums</h1>
          <p className="text-lg sm:text-xl text-purple-100 mb-8">
            Connect, share knowledge, and grow with the community 🚀
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search discussions..."
              className="flex-1 px-4 py-3 outline-none text-gray-800"
            />
            <button className="px-5 py-3 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-r ${cat.color} text-white shadow-lg transform hover:scale-105 transition-transform cursor-pointer`}
            >
              <cat.icon className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Recent Discussions</h2>
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <ul>
            {discussions.map((post, index) => (
              <li
                key={index}
                className="px-6 py-4 border-b last:border-none flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-500">
                    by {post.author} • {post.time}
                  </p>
                </div>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.replies} replies
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Forums;
