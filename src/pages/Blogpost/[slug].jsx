import React from 'react'
import Image from 'next/image'
import nature2 from '../../../public/nature1.jpg';

const Slug = () => {

    const currentDate = new Date();
    const fullDate = currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div>
            <div className="slugcontainer h-full w-[70%] m-auto">
                <div className="slugcontent mt-10">
                    <div className="slugrow grid grid-cols-2 gap-4">
                        <div className="leftslug">
                            <div className="slugheading">
                                <h2 className='text-3xl uppercase font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                <p className='mt-4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem veniam doloremque quaerat impedit iste, odio maxime quisquam eligendi est blanditiis sapiente ullam asperiores amet pariatur repellat quasi vitae consequatur magni deserunt aperiam architecto.</p>
                            </div>
                        </div>
                        <div className="rightslug">
                            <div className="slugimage">
                                <Image className='natureslug h-full w-full' src={nature2} />
                            </div>
                        </div>
                    </div>

                    <div className="slugdescription mt-6">
                        <h1 className='text-2xl uppercase font-bold'>Description</h1>
                        <p className='mt-3 text-gray-800 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt minima at ipsam blanditiis consequuntur voluptate, adipisci et laudantium, quod eius modi quaerat, ipsum possimus. Magnam ex voluptas consequatur minima sequi, corrupti cupiditate, cum dicta hic esse atque perferendis dolore nisi! Asperiores, autem ut. Aspernatur, quod nam dicta doloribus mollitia hic labore! Natus dolorem sapiente excepturi, veritatis consectetur accusamus dolorum enim aperiam quibusdam, dolor soluta? Officia labore fugit soluta veritatis  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio temporibus, nisi voluptate, illum facere dolores consequuntur ducimus dicta officiis explicabo soluta qui est modi, odit quibusdam neque culpa praesentium error aut nulla? Voluptate id consequuntur magni vel, nobis dolorum dolore praesentium porro, voluptas temporibus voluptatum! Modi veritatis quo et porro neque eius nemo deleniti rem sint, amet, consectetur sed id omnis nulla ipsa, qui ex fuga maxime sequi error quidem.</p>

                        <div className="comments flex justify-center items-center flex-col">
                            <textarea placeholder='Write a comment' rows={2} className='bg-slate-300 w-full rounded-sm mt-4 text-black p-3' />
                            <button className="commentbtn bg-black py-2 cursor-pointer px-6 rounded-md text-white mt-4 hover:bg-slate-900">
                                Comment
                            </button>
                        </div>
                    </div>

                    <div className="peoplescomments mt-6">
                        <h2 className='text-2xl font-bold'>People who comments</h2>
                        <div className="comments_row mt-3 ">
                            <div className="comment1 mt-4">
                                <div className="userinfo">
                                    <h1 className='font-semibold'>John Doe</h1>
                                    <span className='font-bold'>{fullDate}</span>
                                    <p className='text-gray-700 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, inventore.</p>
                                </div>

                            </div>
                            <div className="comment2 mt-4">
                                <div className="userinfo">
                                    <h1 className='font-semibold'>John Doe</h1>
                                    <span className='font-bold'>{fullDate}</span>
                                    <p className='text-gray-700 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, inventore.</p>
                                </div>
                            </div>
                            <div className="comment3 mt-4">
                                <div className="userinfo">
                                    <h1 className='font-semibold'>John Doe</h1>
                                    <span className='font-bold'>{fullDate}</span>
                                    <p className='text-gray-700 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, inventore.</p>
                                </div>
                            </div>
                            <div className="comment4 mt-4">
                                <div className="userinfo">
                                    <h1 className='font-semibold'>John Doe</h1>
                                    <span className='font-bold'>{fullDate}</span>
                                    <p className='text-gray-700 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, inventore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slug