import React from 'react'

const buttons = (props) => {
    return (
        <div className='h-full flex justify-evenly items-center'>
            <div className="prevpage">
                <button className='bg-black text-white text-center cursor-pointer font-semibold py-2 px-8 rounded-sm'>Previous</button>
            </div>
            <div className="next">
                <button className='bg-black text-white text-center cursor-pointer font-semibold py-2 px-8 rounded-sm'>Next</button>
            </div>
        </div>
    )
}

export default buttons