'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const StateDetails = () => {
  const { slug } = useParams();
  console.log(slug);
  const decodedSlug = decodeURIComponent(slug);
console.log(decodedSlug);
  // Extract state and category using split
  const parts = decodedSlug.split('-');
  const state = parts.pop(); // Last part is state
  const category = parts.join(' '); // Remaining part is category

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Category: {category}</h1>
      <h2 className="text-2xl">State: {state}</h2>
      <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
    </div>
  );
};

export default StateDetails;
