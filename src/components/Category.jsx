import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {

  return (
    <div className='px-4 py-6 lg:py-12'>
      <h1 className='text-purple-700 font-bold text-2xl md:text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex flex-col md:flex-row justify-center items-center'
          >
            <h2 className='font-bold text-sm sm:text-xl text-center mx-3'> {item.name} </h2>
            <img src={item.image} alt={item.name} style={{ maxHeight: "85%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
