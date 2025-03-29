'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const State = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bestwebsitedesigningcompanyinindia.com/dynamic_api/api/state_list');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">State List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((item, index) => (
              <Link key={index} href={`/wireropemanufacturers/${encodeURIComponent(item)}`}>
                <div className="bg-gray-700 p-4 rounded-lg shadow-md  transition duration-300 cursor-pointer">
                  <h3 className="text-white text-lg font-semibold"><p>wireropemanufacturers</p>{item}</h3>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 col-span-3 text-center">Loading states...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default State;
