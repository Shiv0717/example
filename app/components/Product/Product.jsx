import React from 'react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Experience premium sound with our noise-cancelling wireless headphones.',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Track your fitness and stay connected with our advanced smart watch.',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    description: 'Enjoy high-performance gaming with our latest gaming laptop.',
    price: '$1200',
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Product = () => {
  return (
    <div className=" bg-gray-900 text-white py-16 px-8">
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 p-6 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <p className="text-green-500 font-bold mb-4">{product.price}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
