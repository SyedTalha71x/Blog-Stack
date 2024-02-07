"use client"
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn } from 'next-auth/react';

const login = () => {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <div className="logincontainer h-full w-[50%] m-auto">
      <div className="loginform flex justify-center items-center h-full w-full">
        <div className="log p-28 bg-slate-300 mt-40 shadow-xl">
          <div className="line">
            <FaGoogle className='text-2xl relative top-9 left-4' />
            <button className='bg-orange-600 w-full py-3 px-20 text-black font-semibold ' onClick={() => { signIn("google") }}>Sign in with Google</button>
          </div>
          <div className="line">
            <FaGithub className='text-2xl relative top-9 left-4 text-white' />
            <button className='bg-black w-full py-3 text-white font-semibold ' onClick={() => { signIn("github") }}>Sign in with Github</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login