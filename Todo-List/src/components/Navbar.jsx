import React from 'react'

const Navbar = () => {
    return (
      <nav className='flex justify-around bg-violet-950 text-white py-4'>
          <div className="logo">
              <span className='font-bold text-xl cursor-pointer'>iTask</span>
          </div>
        <ul className="flex gap-8">
          <li className='cursor-pointer hover:font-medium transition-all w-20'>Home</li>
          <li className='cursor-pointer hover:font-medium transition-all w-20'>Your Tasks</li>
        </ul>
      </nav>
    )
  }

export default Navbar
