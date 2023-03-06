import React from 'react'
import icon from './icon/Icon.svg'
import cloud from './icon/Cloud.svg'
import line from './icon/Lines.svg'
import spotify from './icon/Vector.svg'
import Logoipsum1 from './icon/Logoipsum1.svg'
import Logoipsum2 from './icon/Logoipsum2.svg'
import Logoipsum3 from './icon/Logoipsum3.svg'
import Logoipsum4 from './icon/Logoipsum4.svg'
import Logoipsum5 from './icon/Logoipsum5.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className=''>
            <div className='sm:h-60 h-96'>
                <div className='container px-5 pt-24 mx-auto text-white relative'>
                    <div className='bg-[#4F3BE7] sm:h-56 h-96 space-y-10 flex flex-col justify-center'>
                        <div>
                            <p className='font-bold text-2xl'>Our Sponsors</p>
                        </div>
                        <div>
                            <div className='container flex flex-wrap sm:space-y-0 space-y-4 justify-between mx-auto items-center font-semibold text-lg sm:px-14 px-24'>
                                <div className='cursor-pointer'>
                                    <img className='h-[38px] w-[166px]' src={Logoipsum1} alt="apple-podcasts" />
                                </div>
                                <div className='cursor-pointer'>
                                    <img className='h-[38px] w-[166px]' src={Logoipsum2} alt="sound-cloud" />
                                </div>
                                <div className='cursor-pointer'>
                                    <img className='h-[38px] w-[166px]' src={Logoipsum5} alt="spotify" />
                                </div>
                                <div className='cursor-pointer'>
                                    <img className='h-[38px] w-[166px]' src={Logoipsum3} alt="google-podcasts" />
                                </div>
                                <div className='cursor-pointer'>
                                    <img className='h-[38px] w-[166px]' src={Logoipsum4} alt="spotify" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#14142B]">
                <div className="container px-5 pt-40 pb-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col text-white">
                    <div className="w-64 flex justify-center md:mx-0 mx-auto text-center md:text-left">
                        <p className=" text-3xl font-bold">&#123;Finsweet</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-20">
                            <h2 className="title-font font-bold tracking-widest text-lg mb-6">Pages</h2>
                            <nav className="list-none mb-10 space-y-4">
                                <li>
                                    <Link to={'/'}>
                                        <p className=" cursor-pointer">Home</p>
                                    </Link>
                                </li>
                                <li>
                                    <p className=" cursor-pointer">Podcast</p>
                                </li>
                                <li>
                                    <p className=" cursor-pointer">Host</p>
                                </li>
                                <li>
                                    <p className=" cursor-pointer">Blog</p>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-16">
                            <h2 className="title-font font-bold  tracking-widest text-lg mb-6">Reach Us</h2>
                            <nav className="list-none mb-10 space-y-4">
                                <li>
                                    <p className="cursor-pointer">Contact</p>
                                </li>
                                <li>
                                    <Link to={'./about'}>
                                        <p className=" cursor-pointer">About</p>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-20">
                            <h2 className="title-font font-bold  tracking-widest text-lg mb-6">Subscribe</h2>
                            <nav className="list-none mb-10 space-y-5">
                                <li>
                                    <div className='cursor-pointer flex items-center space-x-2'>
                                        <img src={icon} alt="apple-podcasts" />
                                        <p>Apple Podcasts</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='cursor-pointer  flex items-center space-x-2'>
                                        <img src={line} alt="google-podcasts" />
                                        <p>Google Podcasts</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='cursor-pointer  flex items-center space-x-2'>
                                        <img src={cloud} alt="sound-cloud" />
                                        <p>SOUNDCLOUD</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='cursor-pointer  flex items-center space-x-2'>
                                        <img src={spotify} alt="spotify" />
                                        <p>Spotify®</p>
                                    </div>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-[#4F3BE7] text-white">
                    <div className="container mx-auto py-4 px-5 flex justify-center flex-wrap flex-col sm:flex-row">
                        <p className="text-md text-center sm:text-left font-bold">© Copyright Finsweet 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer