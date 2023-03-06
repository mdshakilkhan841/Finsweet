import React, { useState } from 'react'
import microphone from './icon/microphone.svg'


const Card = () => {
    const [data, setData] = useState([
        {
            title: 'Ep 1: How to build a world-class business brand',
            description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
            img: 'picture/people.png'
        },
        {
            title: 'Ep 2: Getting the first 100 customers for your business',
            description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
            img: '/picture/customer.png'
        },
        {
            title: 'Ep 3: Should I raise money for my startup, or not?',
            description: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.',
            img: '/picture/conversation.png'
        }
    ]);

    return (
        <>
            {
                data.map((e, i) => {
                    return (
                        < div className="p-4 md:w-1/3" >
                            <div key={i} className="h-full overflow-hidden">
                                <div className='relative'>
                                    <img className='absolute top-0 right-0 p-4' src={microphone} alt="microphone-icon" />
                                </div>
                                <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={e.img} alt="blog" />
                                <div className="mt-8 text-left mr-1">
                                    <h1 className="title-font md:text-xl text-lg font-bold text-gray-900 mb-3">{e.title}</h1>
                                    <p className="leading-relaxed mb-3">{e.description}</p>
                                    <div className="flex items-center flex-wrap space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#4F3BE7' className="w-12 h-12 hover:fill-[#3F2DB2] cursor-pointer">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
                                        </svg>
                                        <p className="text-[#4F3BE7] hover:text-[#3F2DB2] font-bold cursor-pointer">Listen Now</p>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
}

export default Card