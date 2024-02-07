
import React, { useState } from 'react'
import Image from 'next/image'
import addimage from '../../public/nature1.jpg'
import { IoMdAddCircle } from "react-icons/io";

const addblog = () => {
    const [open, setopen] = useState(false)

    return (
        <>
            <div className="addblogcontainer h-full w-[70%] m-auto cursor-pointer">
                <div className="addblogheading mt-10">
                    <h2 className='text-3xl font-bold uppercase'>Write your Blog</h2>
                </div>


                <div className="writetextarea mt-4">
                    <textarea rows={10} placeholder='Write your blog' className='w-full p-4 rounded-sm bg-slate-50 outline-none' />
                </div>

                <button onClick={() => { setopen(!open) }} className='openbuttonimage mt-2'>
                    <IoMdAddCircle className='text-3xl' />
                </button>


                {open &&
                    <div className="add">
                        <button className="addimagebtn bg-black text-white py-2 px-6 rounded-md ml-1">
                            Image

                        </button>
                        <button className="addexternalimage bg-black text-white py-2 px-6 rounded-md ml-1">
                            External Image
                        </button>
                        <button className="addvideobtn bg-black text-white py-2 px-6 rounded-md ml-1">
                            Video
                        </button>
                    </div>
                }
            </div>
        </>
    )
}

export default addblog