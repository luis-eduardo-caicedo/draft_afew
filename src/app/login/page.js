"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="flex items-center justify-center h-screen -mt-60">
            <div className="absolute inset-0 w-full h-full flex ">
                <div className="absolute flex items-center flex-shrink-0 ml-5 mt-6 ">
                    <svg className="text-teal-950 fill-current h-8 w-8 mr-2 " width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg>
                    <Link className="text-teal-950 font-semibold text-xl tracking-tight mr-6 hover:text-slate-500" href="/">A Few Creative</Link>
                </div>
                <Image src="/image_gift.gif" alt='Mi gif' width={420} height={420} className="" />
            </div>
            <h1 className="font-bold text-xl ml-40">
                Log in to A Few Creative
            </h1>
            <div className='mt-120 -ml-36'>
                <div className="relative border border-gray-600 bg-gray-100 p-4 rounded ">
                    <input type="text" placeholder="name"
                        className="peer placeholder-transparent  focus:outline-none bg-gray-100" />
                    <label
                        className="absolute transition-all left-4 -top-0 text-gray-600 text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 pointer-events-none ">Username or Email</label>
                </div>
                <div className="relative mt-6 border bg-gray-100 border-gray-600 p-4 rounded">
                    <input type={showPassword ? 'text' : 'password'} placeholder="password" className="peer placeholder-transparent bg-gray-100 focus:outline-none " />
                    <label className="absolute transition-all left-4 -top-0 text-gray-600 text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 pointer-events-none ">Password</label>
                    <label onClick={() => setShowPassword(!showPassword)} className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer " htmlFor="toggle">{showPassword ? 'hide' : 'show'}</label>
                </div>
                <Link href="/main">
                    <button className="relative bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-36 rounded-full mt-10" >
                        Log in
                    </button>
                </Link>

            </div>
        </div>
    )
}