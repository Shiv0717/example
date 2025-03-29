import React from 'react';

const Features = () => {
  return (
    <div>
      <section className="py-16 px-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Global Reach</h3>
            <p className="text-gray-400">Expand your business with our worldwide network of partners.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold  text-white mb-4">Secure Transactions</h3>
            <p className="text-gray-400">Experience fast and secure transactions with our reliable platform.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold  text-white mb-4">24/7 Support</h3>
            <p className="text-gray-400">Get dedicated support any time to ensure smooth business operations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
