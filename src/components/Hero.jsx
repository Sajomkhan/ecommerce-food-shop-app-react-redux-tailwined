import React from 'react'

const Hero = () => {
  return (
    <div className='p-4 mt-5'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <img className='w-full max-h-[500px] object-cover' src="/assets/hero/1.jpg" alt="/" />
        <div className='absolute top-0 w-full h-full max-h-[500px] bg-purple-500 opacity-50' />
        <div className='absolute  text-gray-300  top-11 w-full h-full'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Healthy <span className='text-pink-700'>& Testy </span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-pink-700 '>Foods</span> Devlivered</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
