import React, { useState } from 'react';
import { data } from '../data/data.js';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../features/carts/CartSlice.js";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const FoodPage = () => {
  
  const dispatch = useDispatch()
  
  const handleBuyItem =(item) =>{
      dispatch(setAddItemToCart(item ))
    }

    const location = useLocation()
    
    const filterFoodByLocation = data.filter((item)=>(
      item.price === location.state
    ))

  const [foods, setFoods] = useState(filterFoodByLocation);   

  // Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='px-4 mb-11 mt-6 md:mt-20 w-10/12 mx-auto'>
        <Link to='/'>
            <button type='button' className='rounded-md  text-white bg-gradient-to-b from-purple-500 to-purple-800 shadow-lg shadow-purple-300 flex items-center justify-center py-2 gap-3 px-5 active:scale-110'>
                <ArrowBackIosIcon className='w-5 h-5' />
                Back To Food Store
            </button>
        </Link>

      <h1 className='text-purple-700 font-bold text-2xl md:text-4xl md:text-center my-4'>Top Rated Food's Items</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button onClick={() => setFoods(data)}className='btn_outline m-1'> All </button>
            <button onClick={() => filterType('burger')}className='btn_outline m-1'> Burger </button>
            <button onClick={() => filterType('pizza')}className='btn_outline m-1'> Pizza </button>
            <button onClick={() => filterType('salad')}className='btn_outline m-1'> Salads </button>
            <button onClick={() => filterType('chicken')}className='btn_outline m-1'> Chicken </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-start max-w-[390px] w-full'>
            <button onClick={() => filterPrice(10)} className='m-1 btn_outline'> $10 </button>
            <button onClick={() => filterPrice(15)} className='m-1 btn_outline'> $15 </button>
            <button onClick={() => filterPrice(20)} className='m-1 btn_outline'> $20 </button>
            <button onClick={() => filterPrice(25)} className='m-1 btn_outline'> $25 </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className="flex flex-col w-full items-center">
              <p className='font-semibold text-[17px] place-self-start ml-3'>{item.name}</p>
              <div className="flex flex-row w-full justify-between items-center">
                <div className='mx-3'>
                  Price: <span className='font-semibold'>${item.price}</span>
                </div>
                <div className='mx-3'>
                  <button className=" text-white border-none bg-purple-700 hover:bg-purple-900 rounded-md shadow-md my-2 px-2 p-1"
                  onClick={()=>handleBuyItem(item)}
                  >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
