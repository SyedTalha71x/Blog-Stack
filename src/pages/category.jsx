import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { SiStyleshare } from "react-icons/si";
import { IoMdFitness } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { FcNeutralTrading } from "react-icons/fc";

const category = () => {
    return (
        <div className="categorymainpage h-full w-[70%] m-auto cursor-pointer p-10">
            <div className="categoryheading">
                <h2 className='text-2xl font-bold'>Popular Categories</h2>
            </div>

            <div className="category_row grid grid-cols-6 mt-6">
                <div className="row_1 grid grid-cols-2 bg-yellow-500 p-4 rounded-lg m-1">
                    <div className="leftrow">
                        <SiStyleshare className="text-2xl" />
                    </div>
                    <div className="rightrow font-semibold">
                        Styles
                    </div>
                </div>
                <div className="row_2 grid grid-cols-2 bg-yellow-500 p-4 rounded-lg m-1">
                    <div className="leftrow">
                        <IoFastFood className="text-2xl" />
                    </div>
                    <div className="rightrow font-semibold">
                        Food
                    </div>
                </div>
                <div className="row_3 grid grid-cols-2 bg-yellow-500 p-4 rounded-lg m-1">
                    <div className="leftrow">
                        <IoMdFitness className="text-2xl" />
                    </div>
                    <div className="rightrow font-semibold">
                        Fitness
                    </div>
                </div>
                <div className="row_4 grid grid-cols-2 bg-yellow-500 p-4 rounded-lg m-1">
                    <div className="leftrow">
                        <FaLaptopCode className="text-2xl" />
                    </div>
                    <div className="rightrow font-semibold">
                        Coding
                    </div>
                </div>
                <div className="row_5 grid grid-cols-2 bg-yellow-500 p-4 rounded-lg m-1">
                    <div className="leftrow">
                        <MdCardTravel className="text-2xl" />
                    </div>
                    <div className="rightrow font-semibold">
                        Travel
                    </div>
                </div>
                <div className="row_6 grid grid-cols-2 bg-yellow-500 p-4 rounded-lg m-1">
                    <div className="leftrow">
                        <FcNeutralTrading className="text-2xl" />
                    </div>
                    <div className="rightrow font-semibold">
                        Trading
                    </div>
                </div>
            </div>
        </div>
    )
}

export default category