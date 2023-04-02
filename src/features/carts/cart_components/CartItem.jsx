import React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../CartSlice.js";



const CartItem = ({ item: { id, name, category, image, price, cartQuantity } }) => {
  
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({ id, name, category, image, price, cartQuantity }))
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY({ id, name, category, image, price, cartQuantity }))
  }
  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY({ id, name, category, image, price, cartQuantity }))
  }

  return (
    <div className="flex items-center justify-center gap-x-5 2xl:w-8/12 px-5">
      {/* cart image part */}
      <div className="w-[110px] 2xl:w-[300px] lg:w-[200px] md:w-[150px]">
        <div className="flex items-center gap-3 md:gap-5">
          <div className="shadow-md bg-white/50 rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out relative">
            <img src={image} alt={`img-${id}`} className="object-cover w-28 h-20 md:w-36 md:h-24" />
            <div className='absolute right-1 top-1 bg-white/80 text-black text-sm px-1 rounded'>${price}</div>
          </div>
        </div>
      </div>

      {/* cart details-increment-dectement */}
      <div className="grid items-center w-[110px] 2xl:w-[300px] lg:w-[250px] md:w-[270px]">
        <div className="items-center">
          <h1 className="font-semibold">{name}</h1>
          <p className="text-sm">{category}</p>
        </div>
        <div className="flex gap-x-4 items-center w-full">
          <button type="button" onClick={onDecreaseItemQTY} className=" btn_outline rounded-md py-0.5 px-1 md:py-0.5 md:px-2"><RemoveIcon /></button>
          <div className="  bg-purple-800 text-white rounded px-2 py-0.5 md:px-3 md:py-1 md:font-semibold text-base md:text-lg">{cartQuantity}</div>
          <button type="button" onClick={onIncreaseItemQTY} className="btn_outline rounded-md py-0.5 px-1 md:py-0.5 md:px-2"><AddIcon /></button>
        </div>
      </div>

      {/* cart amount and delete */}
      <div className="flex flex-row items-center">
          <h1 className="font-bold md:text-lg mx-2 md:mr-8">${price * cartQuantity}</h1>
          <button type="button" className="btn_outline  rounded-md py-0.5 px-1 md:py-0.5 md:px-2" onClick={onRemoveItem}>
            <DeleteIcon />
          </button>
      </div>
    </div>
  );
};

export default CartItem;
