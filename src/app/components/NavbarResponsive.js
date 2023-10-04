"use client"

import Link from "next/link"
import React, { useRef, useState } from 'react';

export function NavbarResponsive() {
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
                <Link className="text-teal-950 font-semibold text-xl tracking-tight mr-6" href="/">A Few Creative</Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-teal-950 border-y-teal-950 hover:text-slate-950 hover:border-gray-800">
                    <svg className="text-teal-950 fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div id="menu" className={`menu ${isMenuHidden ? 'hidden' : ''} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <Link href="/about" className="text-teal-950 block mt-4 lg:inline-block lg:mt-0 hover:text-slate-400 mr-6">About</Link>
                    <Link href="/contact" className="text-teal-950 block mt-4 lg:inline-block lg:mt-0 hover:text-slate-400 mr-6">Contact</Link>
                    <Link href="/blog" className="text-teal-950 block mt-4 lg:inline-block lg:mt-0 hover:text-slate-400">Blog</Link>
                </div>
                <div className="flex flex-row items-center justify-end gap-4 mr-14">
                    <Link href="/login" className="rounded-2xl bg-slate-800 px-4 py-2 font-bold leading-none text-white hover:text-gray-500">Log in</Link>
                    <Link href="/signup" className="text-teal-950 font-bold hover:text-gray-400">Sign up</Link>
                </div>
            </div>
        </nav>
    );
}