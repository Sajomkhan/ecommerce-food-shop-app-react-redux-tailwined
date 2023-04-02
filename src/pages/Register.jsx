import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 min-w-full bg-sky-50">
      <div className="flex flex-col items-center p-11 bg-white rounded-lg">
        <h1 className='text-2xl md:text-4xl font-bold underline'>Register Page</h1>
        <div className='flex flex-col text-lg'>
          <form>
            <div className='md:md:mx-11 my-5'>
              <label
                htmlFor="name"
                className="font-bold text-gray-800"
              >
                Name:
              </label>
              <div className="my-1 px-2 py-1 lg:w-[500px] border-[2px] border-solid border-lightgrey rounded-md focus-within:border-[#8a4af3]">
                <input type='text' className="outline-none bg-transparent" placeholder="Name" />
              </div>
            </div>
            <div className='md:mx-11 my-5'>
              <label
                htmlFor="name"
                className="font-bold text-gray-800"
              >
                Email:
              </label>
              <div className="my-1 px-2 py-1 lg:w-[500px] border-[2px] border-solid border-lightgrey rounded-md focus-within:border-[#8a4af3]">
                <input type='text' className="outline-none bg-transparent" placeholder="Name" />
              </div>
            </div>
            <div className='md:mx-11 my-5'>
              <label
                htmlFor="name"
                className="font-bold text-gray-800"
              >
                Password:
              </label>
              <div className="my-1 px-2 py-1 lg:w-[500px] border-[2px] border-solid border-lightgrey rounded-md focus-within:border-[#8a4af3]">
                <input type='password' className="outline-none bg-transparent" placeholder="password" />
              </div>
            </div>
            <div className='md:mx-11 my-5'>
              <label
                htmlFor="name"
                className="font-bold text-gray-800"
              >
                Confirm Password:
              </label>
              <div className="my-1 px-2 py-1 py-1lg:w-[500px] border-[2px] border-solid border-lightgrey rounded-md focus-within:border-[#8a4af3]">
                <input type='passowrd' className="outline-none bg-transparent" placeholder="confirmPassword" />
              </div>
            </div>
            {/* register button */}
            <div className="flex flex-col md:mx-11 my-8 md:flex-row items-center justify-between ">
              <a href="/login" className='mb-3'>
                <buttton className='btn my-2'>Register</buttton>
              </a>
              <a
                className="text-gray-600 underline hover:text-gray-900 ml-4"
                href="/login"
              >
                Already registered?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;