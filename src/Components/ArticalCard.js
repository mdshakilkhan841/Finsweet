import React from 'react'
import block from './icon/line-block.svg'

const ArticalCard = () => {
    return (
        <div className="p-4 md:w-1/3">

            <div className="h-full overflow-hidden bg-[#F4F2FF]">
                <div className='text-left font-bold p-10'>
                    <h1 className='text-2xl'>Read our <br className="hidden sm:inline-block" /> articles & news</h1>
                    <p className='text-sm text-[#4F3BE7] cursor-pointer pt-2.5'>See More</p>
                </div>
                <img className="sm:w-full w-[1000px] object-cover object-center" src={block} alt="blog" />
            </div>
        </div>
    )
}

export default ArticalCard