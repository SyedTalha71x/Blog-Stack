import React from 'react'
import Image from 'next/image'
import nature from '../../public/nature1.jpg'
import Buttons from './buttons'

const cards = (props) => {

    const currentDate = new Date();
    const fullDate = currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return (
        <>
            <div className="cardcontainer h-full w-[70%] m-auto cursor-pointer p-10 mt-10">
                <div className="maincardpage">
                    <div className="cardheading">
                        <h2 className='text-2xl font-bold' >Recent Posts</h2>
                    </div>

                    <div className="cardrow">
                        <div className="maincard mt-5">
                            <div className="cardrow1 grid grid-cols-2 gap-10 mt-3">
                                <div className="leftcard">
                                    <Image src={nature} className='card_image  h-[300px] w-full' />
                                </div>
                                <div className="rightcard">
                                    <div className="cardcontent mt-4">
                                        <span  className='font-semibold'>{fullDate}</span>
                                        <h1  className='text-3xl mt-1 uppercase font-extrabold w-full rounded-sm'>Heaven for bloggers</h1>
                                        <p  c-1ssName='mt-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cumque nemo assumenda temporibus tempora at unde, ipsum quibusdam, consequatur maiores eligendi non ducimus? Odit fugit iste molestiae eum! Blanditiis, tenetur. Qui architecto eaque ab corporis voluptates aperiam error provident suscipit!..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardrow1 grid grid-cols-2 gap-10 mt-3">
                                <div className="leftcard">
                                    <Image src={nature} className='card_image h-full w-full rounded-sm' />
                                </div>
                                <div className="rightcard">
                                    <div className="cardcontent">
                                        <div className="cardcontent mt-4">
                                            <span  className='font-semibold'>{fullDate}</span>
                                            <h1  className='text-3xl mt-1 uppercase font-extrabold w-full'>Heaven for bloggers</h1>
                                            <p  className='mt-1 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cumque nemo assumenda temporibus tempora at unde, ipsum quibusdam, consequatur maiores eligendi non ducimus? Odit fugit iste molestiae eum! Blanditiis, tenetur. Qui architecto eaque ab corporis voluptates aperiam error provident suscipit!..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardrow1 grid grid-cols-2 gap-10 mt-3">
                                <div className="leftcard">
                                    <Image src={nature} className='card_image h-full w-full rounded-sm' />
                                </div>
                                <div className="rightcard">
                                    <div className="cardcontent">
                                        <div className="cardcontent mt-4">
                                            <span  className='font-semibold'>{fullDate}</span>
                                            <h1  className='text-3xl mt-1 uppercase font-extrabold w-full'>Heaven for bloggers</h1>
                                            <p  className='mt-1 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cumque nemo assumenda temporibus tempora at unde, ipsum quibusdam, consequatur maiores eligendi non ducimus? Odit fugit iste molestiae eum! Blanditiis, tenetur. Qui architecto eaque ab corporis voluptates aperiam error provident suscipit!...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Buttons />
        </>
    )
}

export default cards