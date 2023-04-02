import React from 'react';
import { Link } from 'react-router-dom';

const TopFoods = () => {
  return (
    <div className='mt-11'>
      <h1 className='text-purple-700 font-bold text-2xl md:text-4xl text-center'> Top Rated Menu Items </h1>
      <div className='p-4 py-7 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-purple-600 bg-opacity-30 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <Link to='/foodpage' state={15}>
              <button className='btn_outline mx-2 absolute bottom-4'>Order Now</button>
            </Link>
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
            alt='/'
          />
        </div>
       
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-purple-600 bg-opacity-30  rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <Link to='/foodpage' state={20}>
              <button className='btn_outline mx-2 absolute bottom-4'>Order Now</button>
            </Link>
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
            alt='/'
          />
        </div>
       
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-purple-600 bg-opacity-30  rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            <Link to='/foodpage' state={25}>
              <button className='btn_outline mx-2 absolute bottom-4'>Order Now</button>
            </Link>
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default TopFoods;

