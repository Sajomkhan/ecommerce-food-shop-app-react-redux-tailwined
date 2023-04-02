import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import bag from '../../../assets/emptybag.png'
import { Link } from 'react-router-dom';

const CartEmpty = ({ onCartToggle }) => {
  return (
   <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src={bag}
          alt="emptybag/img"
          className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'
        />
        <Link to='/'>
          <button type='button' className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'>
              <ArrowBackIosIcon className='w-5 h-5 text-slate-900' />
              Back To Food Store
          </button>
        </Link>
      </div>
   </>
  )
}

export default CartEmpty