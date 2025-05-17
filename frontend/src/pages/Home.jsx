import React from 'react';

const products = [
  {
    id: 1,
    name: "T-shirt",
    price: "$20",
    image: "https://imgs.search.brave.com/oMiMFknYd489UXYT1jMpX3wfP_EcLaqxZqlWQT9MPNg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRzdHVkaW9zLmNv/bS9jZG4vc2hvcC9m/aWxlcy9NYXJrZXRf/cTEyNUZsYXRzXzEy/My5wbmc_dj0xNzM5/MzAwODc0JndpZHRo/PTIwNDg",
  },
  {
    id: 2,
    name: "Shoes",
    price: "$50",
    image: "https://imgs.search.brave.com/Q9lV6EmBxoQdV9x_c7SFzq8UmnYKXv-8bck2oS0y8oY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzI3LzYzLzcy/LzM2MF9GXzMyNzYz/NzIzN18zelZ6UjlQ/VXRJa3htVVRTcDNF/bE1jdGR6MFZSR00x/OS5qcGc",
  },
  {
    id: 3,
    name: "Watch",
    price: "$80",
    image: "https://imgs.search.brave.com/XVNPZvKnsnfrVMRWsceFyqHmgRa8w4Hqr4un_3XBElk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/OTE4MDAzOC9waG90/by93cmlzdHdhdGNo/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1BV2taLWdhTG82/MDF2RzVlaVFjc2pZ/UmpDakR4WmRHTDd2/LWpXdnZBakVNPQ",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Krido</h1>
        <div className="space-x-4">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">Cart</button>
          <button className="hover:underline">Logout</button>
        </div>
      </nav>

      {/* Welcome Banner */}
      <div className="bg-blue-100 text-center py-8 text-black">
        <h2 className="text-2xl font-semibold">Welcome to Karido!</h2>
        <p>Explore our amazing deals today</p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow hover:shadow-lg p-4 transition justify-items-center">
            <img src={product.image} alt={product.name} className="h-40 object-cover " />
            <h3 className="text-lg font-bold text-black">{product.name}</h3>
            <p className="text-gray-700 ">{product.price}</p>
            <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default Home;
