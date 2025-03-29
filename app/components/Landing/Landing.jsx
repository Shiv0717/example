import React from 'react';

const Landing = () => {
  return (
    <div className=" bg-black text-white">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to Business Setu</h1>
        <p className="text-lg mb-8 max-w-lg">
          Connecting businesses worldwide with innovative solutions and seamless trade experiences.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full">
          Get Started
        </button>
      </section>

    </div>
  );
}

export default Landing;
