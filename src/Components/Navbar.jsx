import React, { useState } from 'react'
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = (props) => {

    const { data: session, status } = useSession();

    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex items-center justify-around bg-slate-50 p-4 sticky top-0 cursor-pointer" style={{ backgroundColor: props.mode === 'light' ? '' : '#1C0502' }}>
            <h1 style={{ color: props.mode === 'light' ? '' : 'white' }} className='main_head text-3xl font-bold uppercase tracking-wider '>
                Bl<span className='text-red-600'>o</span>gs
            </h1>

            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link style={{ color: props.mode === 'light' ? '' : 'white' }} href={"/about"}>About</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link style={{ color: props.mode === 'light' ? '' : 'white' }} href={"/"}>Homepage</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link style={{ color: props.mode === 'light' ? '' : 'white' }} href={"/contact"}>Contact</Link>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <Link style={{ color: props.mode === 'light' ? '' : 'white' }} href={"/addblog"}>Write</Link>
                            </li>
                            <div className='mt-[1px]'>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div onClick={props.togglemode} class="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                                </label>
                            </div>
                            {session ? <li>
                                <a style={{ color: props.mode === 'light' ? '' : 'black', backgroundColor: props.mode === 'light' ? '' : 'lightblue' }} onClick={() => { signOut() }} className='text-[15px]  bg-black text-white py-2 px-5  rounded-md '>Logout</a>
                            </li> : <li className="border-b border-gray-400 my-8 uppercase">
                                <Link style={{ color: props.mode === 'light' ? '' : 'white' }} href={"/login"}>Login</Link>
                            </li>}
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                    <li>
                        <Link style={{ color: props.mode === 'light' ? '' : 'white' }} className='text-[17px] font-semibold hover:underline underline-offset-4  rounded-md ' href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link style={{ color: props.mode === 'light' ? '' : 'white' }} className='text-[17px] font-semibold hover:underline underline-offset-4   rounded-md ' href={"/"}>Homepage</Link>
                    </li>
                    <li>
                        <Link style={{ color: props.mode === 'light' ? '' : 'white' }} className='text-[17px] font-semibold hover:underline underline-offset-4   rounded-md ' href={"/contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link style={{ color: props.mode === 'light' ? '' : 'white' }} className='text-[17px] font-semibold hover:underline underline-offset-4   rounded-md ' href={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link style={{ color: props.mode === 'light' ? '' : 'white' }} className='text-[17px] font-semibold hover:underline underline-offset-4   rounded-md ' href={"/addblog"}>Write</Link>
                    </li>
                    <div className='mt-[1px]'>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div onClick={props.togglemode} class="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                        </label>
                    </div>
                    {session && <li>
                        <a style={{ color: props.mode === 'light' ? '' : 'black', backgroundColor: props.mode === 'light' ? '' : 'lightblue' }} onClick={() => { signOut() }} className='text-[15px]  bg-black text-white py-2 px-5  rounded-md '>Logout</a>
                    </li>}

                </ul>
            </nav>
            <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          font-weight: bold;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: #E9DADA;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
        </div>
    )
}

export default Navbar