import React from 'react';
import ComingSoon from './student/components/ComingSoon';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen mt-20 bg-gray-100">
      <header className="">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            <ComingSoon />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
