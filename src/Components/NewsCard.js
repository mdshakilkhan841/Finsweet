import React from 'react'

const NewsCard = () => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden">
                <img className="lg:h-72 md:h-48 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div className="mt-8 text-left mr-1">
                    <h1 className="title-font md:text-xl text-lg font-bold text-gray-900 mb-3">Ep 1: How to build a world-class business brand</h1>
                    <p className="leading-relaxed mb-3">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <div className="flex items-center">
                        <p className="text-[#4F3BE7] hover:text-[#3F2DB2] font-bold cursor-pointer">Listen Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard