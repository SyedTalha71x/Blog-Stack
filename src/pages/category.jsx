import React, { useEffect, useState } from 'react'
import { IoFastFood } from "react-icons/io5";
import { SiStyleshare } from "react-icons/si";
import { IoMdFitness } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { FcNeutralTrading } from "react-icons/fc";
import Cards from './cards';
import connectDB from '../../DBConnecttion/db';
import Category from '../../Models/Category';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';


const category = (props) => {

    const [categories, setcategories] = useState([])

    const router = useRouter();

    useEffect(() => {

        const fetchCategories = async () => {
            try {
                let url = 'http://localhost:3000/api/Category/category';
                const response = await fetch(url);

                if (!response.ok) {
                    console.log("Failed to fetched categories");
                }

                const data = await response.json();
                setcategories(data);

            }
            catch (error) {
                console.log(error);
            }
        }
        fetchCategories();
    }, [router.isReady])

    console.log(categories);

    return (
        <>
            <div className="categorymainpage h-full w-[70%] m-auto cursor-pointer p-10">
                <div className="categoryheading">
                    <h2 className='text-2xl text-black  font-bold' >Popular Categories</h2>
                </div>

                <div className="category_row grid grid-cols-6 mt-6 w-full">
                    {categories.map((k) => {
                        return <Link key={k.title} href={"/blog?cat=style"} className={`${k.slug}`} >
                            <div className="row_1 grid grid-cols-2 bg-slate-300 p-4 rounded-lg m-1">
                                <div className="leftrow">
                                    {k.img && <Image src={k.img} height={20} width={20} className='rounded-full' />}
                                </div>
                                <div className="rightrow font-semibold ">
                                    {k.title}
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </>
    )
}


export default category