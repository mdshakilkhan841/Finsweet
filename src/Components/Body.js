import React from 'react'
import ArticalCard from './ArticalCard'
import Card from './Card'
import NewsCard from './NewsCard'

const Body = () => {
    return (
        <div className='container mx-auto md:pt-24 pt-12 px-5'>
            <p className='text-left text-2xl font-bold'>Recent Episodes</p>
            <div className='flex justify-between mt-4 items-center'>
                <p className='w-1/2 text-left'>Apparently we had reached a great height in the <br className="hidden md:inline-block" />  atmosphere, for the sky was a dead black.</p>
                <div className=''>
                    <button className="flex items-center text-white bg-[#4F3BE7] border-0 px-6 py-1.5 focus:outline-none hover:bg-[#3F2DB2] sm:text-lg">See All Episodes</button>
                </div>
            </div>
            <div className='container py-14 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='container py-10 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    <ArticalCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
        </div>
    )
}

export default Body