'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const StatePage = () => {
  const { state } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome to {decodeURIComponent(state)}</h1>
        <p className="text-gray-300">Explore the best wire rope manufacturers in {decodeURIComponent(state)}.</p>
      </div>
    </div>
  );
};

export default StatePage;
