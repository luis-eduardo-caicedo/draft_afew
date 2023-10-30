"use client"

import Link from "next/link"
import React, { useRef, useState } from 'react';
import Image from 'next/image';

export function NavbarLoggin() {
    const botonRef = useRef(null);
    const menuRef = useRef(null);
    const [isMenuHidden, setIsMenuHidden] = useState(true);

    const handleClick = () => {
        // Cambiar el estado para mostrar u ocultar el menú
        setIsMenuHidden(!isMenuHidden);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-200 p-6">
            <div className="flex items-center flex-shrink-0 mr-6">
                <svg className="text-teal-950 fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg>
                <Link className="text-teal-950 font-semibold text-xl tracking-tight mr-6 hover:text-slate-500" href="/">A Few Creative</Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-teal-950 border-y-teal-950 hover:text-slate-950 hover:border-gray-800">
                    <svg className="text-teal-950 fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div id="menu" className={`menu ${isMenuHidden ? 'hidden' : ''} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <Link href="/terminal" className="text-teal-950 block mt-4 lg:inline-block lg:mt-0 hover:text-slate-400 mr-6">Terminal</Link>
                    <Link href="/contact" className="text-teal-950 block mt-4 lg:inline-block lg:mt-0 hover:text-slate-400 mr-6">Contact</Link>
                    <Link href="/blog" className="text-teal-950 block mt-4 lg:inline-block lg:mt-0 hover:text-slate-400 mr-6">Blog</Link>
                    <Link href="/main" className="text-teal-950 block mt-4 lg:inline-block lg:mt-0 hover:text-slate-400">Main</Link>
                </div>
                <div className="flex flex-row items-center justify-end gap-4 mr-14">
                    <form>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-500 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    <Link href="/login" className="rounded-3xl bg-slate-700 px-8 py-3 font-bold leading-none text-white hover:text-gray-500 mr-4">Upload</Link>
                    <Image src="/user.png" alt='Icon' width={45} height={45} className="" />
                </div>
            </div>
        </nav>
    );
}