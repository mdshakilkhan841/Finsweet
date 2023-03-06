import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='shadow'>
      <div className='container flex justify-between mx-auto items-center pt-3 pb-3 px-5'>
        <Link to={'/'}>
          <p className='font-bold lg:text-3xl text-2xl cursor-pointer'>&#123;Finsweet</p>
        </Link>
        <Link to={'/about'}>
          <p className='cursor-pointer text-lg font-bold'>About</p>
        </Link>
      </div>
    </div>
  )
}

export default Header