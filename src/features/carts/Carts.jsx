import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectCartItems, selectTotalAmount, selectTotalQTY, setClearCartItems, setGetTotals} from "./CartSlice.js";
import CartCount from "./cart_components/CartCount";
import CartEmpty from "./cart_components/CartEmpty";
import CartItem from "./cart_components/CartItem";


const Carts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals())
  },[cartItems, totalQTY, dispatch])

  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }
  
  return (
    <div className="bg-gray-200 md:w-9/12 mx-auto shadow-lg" >

      {/* cart header */}
        <div className=" bg-white">
          <CartCount totalQTY={totalQTY}  onClearCartItems={onClearCartItems} />

          {/* if cart empty */}
          { cartItems?.length === 0 ? <CartEmpty /> 

          // cart center
          : <div className="flex items-center flex-col gap-y-4 py-3 mt-[50px] mb-[85px] w-full mx-auto">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
          }  
            {/* cart footer */}
            <div className="fixed w-full md:w-9/12 bottom-0 bg-gray-800 text-white h-20">
              <div className="flex h-full items-center justify-center  gap-x-32 md:w-7/12 mx-auto ">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <p className="text-center hidden xl:flex">Taxes and Shipping Will Calculate At Shipping</p>
                <h1 className="font-bold rounded bg-theme-cart px-1 py-0.5">${totalAmount}</h1>
              </div>
            </div>  
        </div>        
    </div>
  );
};

export default Carts;

