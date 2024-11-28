import React from 'react';
import Image from 'next/image';

const Cloths = () => {
  const cldata = [
    { id: 1, name: 'Pink suit', price: 50, description: 'Pink suit', image: '/card01.png' },
    { id: 2, name: 'White embroidery suit', price: 69, description: 'White embroidery suit', image: '/card02.png' },
    { id: 3, name: 'White suit', price: 65, description: 'White suit', image: '/card03.png' },
    { id: 4, name: 'Black suit', price: 20, description: 'Black suit', image: '/card04.png' },
    { id: 5, name: 'Red embroidery suit', price: 79, description: 'Red embroidery suit', image: '/card05.png' },
    { id: 6, name: 'Blue plain suit', price: 20, description: 'Blue plain suit', image: '/card06.png' },
  ];

  return (
    <div className="cloths grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 my-10">
      {cldata.map((cloth) => (
        <div key={cloth.id} className="lp-card bg-white p-5 rounded-md shadow-md text-center">
          <Image
            src={cloth.image}
            alt={cloth.name}
            width={400}
            height={300} 
            className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
          />
          <h3 className="mt-4 text-2xl font-bold">{cloth.name}</h3>
          <p className="text-gray-500">{cloth.description}</p>
          <div className="price text-blue-500 text-xl font-semibold mt-2">${cloth.price}</div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cloths;
