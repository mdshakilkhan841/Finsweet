import React from 'react'
import icon from './icon/Icon.svg'
import cloud from './icon/Cloud.svg'
import line from './icon/Lines.svg'
import spotify from './icon/Vector.svg'

const Hero = () => {
    return (
        <>
            <div className="container mx-auto flex lg:px-24 md:px-12 md:py-24 py-12 sm:flex-row flex-col items-center">
                <div className="w-1/2 flex flex-col sm:items-start sm:text-left mb-16 md:mb-0 items-center text-center lg:pr-20">
                    <h1 className="title-font text-4xl mb-4 font-bold">Become The Hero
                        <br className="hidden lg:inline-block" /> Of Your Own Story
                    </h1>
                    <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    <div className="flex w-full md:justify-start justify-center">
                        <div className="relative w-full">
                            <input type="text" placeholder='Enter Your Email ID' id="hero-field" name="hero-field" className=" block p-2.5 w-full z-20 text-sm bg-[#F4F2FF] focus:ring-1 focus:outline-none focus:ring-[#e4e1f6]" />
                        </div>
                        <button className="flex text-white bg-[#4F3BE7] border-0 py-1.5 sm:px-6 px-1.5 focus:outline-none hover:bg-[#3F2DB2] sm:text-lg text-center ">Subscribe</button>
                    </div>
                </div>
                <div className="w-1/2 flex justify-evenly items-center">
                    <div className='bg-[#4F3BE7] h-20 w-8'></div>
                    <div className='bg-[#18D993] h-48 w-8'></div>
                    <div className='bg-[#4F3BE7] h-32 w-8'></div>
                    <div className='bg-[#18D993] h-20 w-8'></div>
                    <div className='bg-[#4F3BE7] h-48 w-8'></div>
                    <div className='bg-[#18D993] h-32 w-8'></div>
                </div>
            </div>
            <div className='container flex flex-wrap justify-between mx-auto items-center font-semibold text-lg'>
                <p>Podcast Available On</p>
                <div className='cursor-pointer flex items-center space-x-2'>
                    <img src={icon} alt="apple-podcasts" />
                    <p>Apple Podcasts</p>
                </div>
                <div className='cursor-pointer  flex items-center space-x-2'>
                    <img src={cloud} alt="sound-cloud" />
                    <p>SOUNDCLOUD</p>
                </div>
                <div className='cursor-pointer  flex items-center space-x-2'>
                    <img src={line} alt="google-podcasts" />
                    <p>Google Podcasts</p>
                </div>
                <div className='cursor-pointer  flex items-center space-x-2'>
                    <img src={spotify} alt="spotify" />
                    <p>Spotify</p>
                </div>
            </div>
        </>
    )
}

export default Hero