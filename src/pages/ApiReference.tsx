import React from "react";
import { Search } from "lucide-react";

const ApiReference: React.FC = () => {
  return (
    <div className="min-h-screen py-24 bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-4xl font-extrabold text-white">API Reference</h1>
          <p className="mt-3 text-lg text-indigo-100">
            Explore our powerful APIs to integrate and build amazing apps.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search APIs..."
                className="w-full rounded-2xl border border-gray-300 py-3 pl-12 pr-4 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </header>

      {/* API Categories */}
      <main className="max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Authentication", desc: "Manage users, login, and security." },
            { title: "Payments", desc: "Handle transactions and subscriptions." },
            { title: "Analytics", desc: "Track usage and performance metrics." },
            { title: "Messaging", desc: "Send emails, SMS, and notifications." },
            { title: "User Profiles", desc: "Manage accounts and preferences." },
            { title: "Storage", desc: "Upload, store, and retrieve files." },
          ].map((api, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">{api.title}</h3>
              <p className="mt-2 text-gray-600">{api.desc}</p>
              <button className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ApiReference;
