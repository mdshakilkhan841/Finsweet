import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container mx-auto flex lg:px-24 md:px-12 md:py-24 py-12 sm:flex-row flex-col items-center px-5">
                <div className="sm:w-1/2 flex flex-col sm:items-start sm:text-left mb-16 md:mb-0 items-center text-center lg:pr-20">
                    <h1 className="text-4xl mb-8 font-bold">About Finsweet
                        <br className="hidden lg:inline-block" /> Podcast
                    </h1>
                    <p className="mb-8 leading-relaxed sm:text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <div className="flex w-full md:justify-start justify-center">
                        <button className="flex text-white bg-[#4F3BE7] border-0 py-1.5 sm:px-6 px-1.5 focus:outline-none hover:bg-[#3F2DB2] sm:text-lg text-center items-center">Subscribe Now !</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About