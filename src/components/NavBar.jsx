import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-4 z-[100] w-full absolute'>
    
    <h1 className='text-red-600 text-4xl font-bold cursor-pointer mx-4'>NETFLIX</h1>    
    <div>

        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-4 py-2 mx-6 rounded text-white'>Sign Up</button>
    </div>   
    
    </div>
  )
}

export default NavBar
