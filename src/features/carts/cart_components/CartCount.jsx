import React from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const CartCount = ({ totalQTY, onClearCartItems }) => {
  return (
      <div className='bg-gray-800 text-white h-16 flex items-center justify-between pl-1 pr-4 fixed z-10 top-0 left-0 right-0 md:w-9/12 mx-auto mt-[82px]'>
        <div className='flex items-center gap-3'>
            <Link to='/' className='cursor-pointer'>
                <KeyboardDoubleArrowLeftIcon className='w-5 h-5 hover:text-orange-500 stroke-[2]' />
            </Link>
            <div className='grid items-center'>
                <h1 className='text-base font-medium'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 font-normal text-sm'>({totalQTY} Items)</span></h1>
            </div>
        </div>
        <div className='flex items-center'>
            <h1 className='mx-3'>Delete All</h1>
            <button type='button' onClick={onClearCartItems} className='rounded bg-gray-900 active:scale-90 p-0.5'>
                <DeleteIcon className="w-5 h-5" />
            </button>
        </div>
            <Link to='/'  className='flex items-center'>
                <button type='button'className='rounded bg-gray-900 active:scale-90 p-0.5'>
                    <CloseIcon className='w-5 h-5 text-white stroke-[2]' />
                </button>
            </Link>
      </div>
  )
}

export default CartCount