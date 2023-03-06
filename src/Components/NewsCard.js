import React, { useState } from 'react'

const NewsCard = () => {
    const [newsdata, setNewsdata] = useState([
        {
            title: 'Getting the first 100 customers for your business',
            description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
            img: 'picture/bitcoins.png'
        },
        {
            title: 'Apparently we had reached a great height in the atmosphere, ...',
            description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
            img: '/picture/gadgets.png'
        }
    ]);

    return (
        <>
            {
                newsdata.map((e, i) => {
                    return (
                        <div key={i} className="p-4 md:w-1/3">
                            <div className="h-full overflow-hidden">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center" src={e.img} alt="blog" />
                                <div className="mt-8 text-left mr-1">
                                    <h1 className="title-font md:text-xl text-lg font-bold text-gray-900 mb-3">{e.title}</h1>
                                    <p className="leading-relaxed mb-3">{e.description}</p>
                                    <div className="flex items-center">
                                        <p className="text-[#4F3BE7] hover:text-[#3F2DB2] font-bold cursor-pointer">Read Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default NewsCard