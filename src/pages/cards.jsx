import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import nature from '../../public/nature1.jpg'
import Buttons from './buttons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const cards = (props) => {

    const [posts, setposts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;


    const router = useRouter();

    useEffect(() => {

        const fetchposts = async () => {
            try {
                let url = 'http://localhost:3000/api/Posts/fetchpost';
                const response = await fetch(url);

                if (!response.ok) {
                    console.log("Failed to fetched posts");
                }

                const data = await response.json();
                setposts(data);

            }
            catch (error) {
                console.log(error);
            }
        }
        if (router.isReady) {
            fetchposts();
        }
    }, [router.isReady])

    const currentDate = new Date();

    const fullDate = currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };


    return (
        <>
            <div className="cardcontainer h-full w-[70%] m-auto cursor-pointer p-10 mt-10">
                <div className="maincardpage">
                    <div className="cardheading">
                        <h2 className='text-2xl font-bold' >Recent Posts</h2>
                    </div>

                    <div className="cardrow">
                        <div className="maincard mt-5">
                            {currentPosts.map((k) => {
                                const truncatedTitle = k.title.length > 30 ? k.title.slice(0, 30) + '....' : k.title;
                                const truncatedDesc = k.desc.length > 200 ? k.desc.slice(0, 200) + '...' : k.desc;
                                return <div className="cardrow1 grid grid-cols-2 gap-10 mt-3">
                                    <div className="leftcard">
                                        <Image src={k.img} height={100} width={100} className='card_image h-[300px] w-full' />
                                    </div>
                                    <div className="rightcard">
                                        <div className="cardcontent mt-4">
                                            <span className='font-semibold'>{fullDate}</span>

                                            <h1 className='text-2xl mt-1 uppercase font-extrabold w-full rounded-sm'>{truncatedTitle}</h1>

                                            <p c-1ssName='mt-2 text-gray-700'>{truncatedDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-full flex justify-center items-center'>
                <div className="prevpage">
                    {currentPage > 1 && <button onClick={handlePrevPage} className='bg-black text-white text-center cursor-pointer font-semibold py-2 px-8 rounded-sm'>Previous</button>}
                </div>
                <div className="next">
                    {posts.length > indexOfLastPost && <button onClick={handleNextPage} className='bg-black text-white text-center cursor-pointer font-semibold py-2 px-8 rounded-sm'>Next</button>}
                </div>
            </div>
        </>
    )
}

export default cards