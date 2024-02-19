"use client";
import React, { useState, useEffect } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn } from 'next-auth/react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const login = () => {

  const { data, status } = useSession();
  console.log(data, status);

  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setemail(e.target.value);
    }
    else if (e.target.name == 'password') {
      setpassword(e.target.value);
    }
  }


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    });

    if (result.error) {
      console.error('Authentication failed:', result.error);
      alert('Authentication failed');
    } else {
      console.log('Authentication successful:', result);
      router.push("http://localhost:3000/");
    }
  };


  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold uppercase leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={handleChange} value={email} type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={handleChange} value={password} type="text" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>

              <button type="submit" class="w-full text-white bg-black uppercase  font-medium  text-sm px-5 py-2.5 text-center ">Login</button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link href={"/signup"} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
            <div className="line">
              <FaGithub className='text-2xl relative top-8 left-4 text-white' />
              <button className='bg-black w-full py-2 text-white font-semibold ' onClick={() => { signIn("github") }}>Sign in with Github</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default login