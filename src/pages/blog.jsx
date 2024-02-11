import React from 'react'
import Category from './category'
import Cards from './cards'

const blog = () => {
    return (
        <>
            <div>
                <div className="categorypage mt-4">
                    <h1 className='bg-yellow-600 cursor-pointer text-black text-xl font-extrabold uppercase text-center w-[60%] mx-auto py-3 rounded-sm'>Category Page</h1>
                </div>
            </div>
            <Category />
        </>
    )
}

export default blog