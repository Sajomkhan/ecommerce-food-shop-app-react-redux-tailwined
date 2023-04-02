import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiOutlineHome } from 'react-icons/ai';
import {  BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { ShoppingCartOutlined } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY } from '../features/carts/CartSlice.js';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);
    console.log(totalQTY);

    return (
        <div className='sticky z-50 top-0 md:w-11/12 mx-auto bg-white flex justify-between items-center p-4'>

            {/* Left side */}
            <div className='flex items-center'>
                <div className='cursor-pointer mr-2' onClick={() => setNav(!nav)}>
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl px-2'>
                    Food <span className='font-bold text-purple-700'>Store</span>
                </h1>
            </div>

            {/* Search Input */}
            <div className='hidden xl:flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] bg-gray-50 drop-shadow-lg rounded-full '>
                <AiOutlineSearch size={25} />
                <input
                    className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='Search foods'
                />
            </div>

            {/* pages link */}
            <div className='hidden md:flex gap-x-6 font-semibold text-lg bg-gray-50 text-purple-800 shadow-md rounded-3xl py-2 px-4'>
                <Link to='/' className='active:text-blue-600  hover:text-blue-800'>Home</Link>
                <Link to='/register' className='active:text-blue-600  hover:text-blue-800'>Register</Link>
                <Link to='/login' className='active:text-blue-600  hover:text-blue-800'>Login</Link>
            </div>

            {/* Cart button */}
            <Link to='/carts'>
                <button className='btn flex items-center justify-center py-2 px-4 rounded-full' >
                    <Badge badgeContent={totalQTY} color='primary'>
                        <ShoppingCartOutlined />
                    </Badge>
                    <span className='ml-2'>Cart</span>
                </button>
            </Link>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className='bg-black/50 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    Best <span className='font-bold'>Eats</span>
                </h2>
                <nav>
                    <div className='p-4 text-lg font-semibold flex flex-col border-4 border-b-gray-200 gap-y-2'>
                        <Link to='/' className='flex active:text-blue-600  hover:text-blue-800'><AiOutlineHome size={25} className='mr-4'/>Home</Link>
                        <Link to='/register' className='active:text-blue-600  hover:text-blue-800'><AppRegistrationIcon size={25} className='mr-4'/>Register</Link>
                        <Link to='/login' className='active:text-blue-600  hover:text-blue-800'><LoginIcon size={25} className='mr-4' />Login</Link>
                    </div>
                    <ul className='flex flex-col p-4 text-gray-800 gap-y-2'>
                        <li className='text-xl flex'><TbTruckDelivery size={25} className='mr-4' /> <Link to='/register'>Orders</Link></li>
                        <li className='text-xl flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className='text-xl flex'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-xl flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className='text-xl flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

