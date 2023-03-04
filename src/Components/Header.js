import React from 'react'

const Header = () => {
  return (
    <div className='shadow'>
      <div className='container flex justify-between mx-auto items-center pt-3 pb-3'>
        <p className='font-bold text-2xl cursor-pointer'>Finsweet</p>
        <p className='cursor-pointer'>About</p>
      </div>
    </div>
  )
}

export default Header