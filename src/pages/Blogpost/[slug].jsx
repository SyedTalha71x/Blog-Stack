"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import nature2 from '../../../public/nature1.jpg';
import { useRouter } from 'next/router';
import Post from '../../../Models/Post';
import connectDB from '../../../DBConnecttion/db';
import Comment from '../../../Models/Comment';
import { useSession } from 'next-auth/react';

const Slug = ({ posts, comments: initialComments }) => {
    const { data: session, status } = useSession();

    const router = useRouter();
    const { slug } = router.query;
    const [comments, setComments] = useState(initialComments);

    const [desc, setdesc] = useState("")

    const currentDate = new Date();
    const fullDate = currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const handleSubmit = async () => {
        try {



            if (!status || !session) {
                alert('Not Authenticated Sorry');
                return;
            }

            let url = "http://localhost:3000/api/Comments/addcomment";

            const data = { username: session.user?.name, desc };

            let res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await res.json();
            if (result.success) {
                setComments([...comments, { username: session.user?.name, desc }]);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="slugcontainer h-full w-[70%] m-auto">
                <div className="slugcontent mt-10" >
                    {posts.map((item) => {
                        return <div className="slugrow grid grid-cols-2 gap-4" key={item.slug}>
                            <div className="leftslug">
                                <div className="slugheading">
                                    <h2 className='text-3xl uppercase font-bold'>{item.title}</h2>
                                    <p className='mt-4 text-gray-800'>{item.desc}.</p>
                                </div>
                            </div>
                            <div className="rightslug">
                                <div className="slugimage">
                                    <Image className='natureslug h-full w-full' height={500} width={500} src={item.img} />
                                </div>
                            </div>
                        </div>
                    })}

                    <div className="slugdescription mt-6">
                        <h1 className='text-2xl uppercase font-bold'>Description</h1>
                        <p className='mt-3 text-gray-800 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt minima at ipsam blanditiis consequuntur voluptate, adipisci et laudantium, quod eius modi quaerat, ipsum possimus. Magnam ex voluptas consequatur minima sequi, corrupti cupiditate, cum dicta hic esse atque perferendis dolore nisi! Asperiores, autem ut. Aspernatur, quod nam dicta doloribus mollitia hic labore! Natus dolorem sapiente excepturi, veritatis consectetur accusamus dolorum enim aperiam quibusdam, dolor soluta? Officia labore fugit soluta veritatis  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio temporibus, nisi voluptate, illum facere dolores consequuntur ducimus dicta officiis explicabo soluta qui est modi, odit quibusdam neque culpa praesentium error aut nulla? Voluptate id consequuntur magni vel, nobis dolorum dolore praesentium porro, voluptas temporibus voluptatum! Modi veritatis quo et porro neque eius nemo deleniti rem sint, amet, consectetur sed id omnis nulla ipsa, qui ex fuga maxime sequi error quidem.</p>

                        {status == 'authenticated' && session && <div className="comments flex justify-center items-center flex-col">
                            <textarea onChange={(e) => { setdesc(e.target.value) }} placeholder='Write a comment' rows={2} className='bg-slate-300 w-full rounded-sm mt-4 text-black p-3' />
                            <button onClick={handleSubmit} className="commentbtn bg-black py-2 cursor-pointer px-6 rounded-md text-white mt-4 hover:bg-slate-900">
                                Comment
                            </button>
                        </div>}
                    </div>

                    {status !== 'authenticated' && <div className="seemessage mt-6">
                        <h1 className='text-center text-4xl font-bold uppercase bg-orange-600 text-white p-3 cursor-pointer'>Log In to add Comment</h1>
                    </div >}

                    <div className="peoplescomments mt-6">
                        <h2 className='text-2xl font-bold'>People who comments</h2>
                        {comments.map((item, index) => {
                            return <div className="comments_row mt-3 " key={index}>
                                <div className="comment1 mt-4">
                                    <div className="userinfo">
                                        <h1 className='font-semibold'>{item.username}</h1>
                                        <span className='font-bold'>{fullDate}</span>
                                        <p className='text-gray-700 w-full'>{item.desc}</p>
                                    </div>

                                </div>
                            </div>
                        })}
                    </div>


                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    connectDB();
    let posts = [];
    try {
        const post = await Post.findOne({ slug: context.query.slug }).lean();
        if (post) {
            posts.push({
                slug: post.slug,
                title: post.title,
                desc: post.desc,
                img: post.img,
                desc: post.desc
            });
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
    }

    let comments = [];
    try {
        const fetchedComments = await Comment.find();
        if (fetchedComments) {
            comments = fetchedComments.map(comment => ({
                username: comment.username,
                desc: comment.desc
            }));
        }
    } catch (error) {
        console.error("Error fetching comments:", error);
    }

    return {
        props: {
            posts, comments
        },
    };
}
export default Slug