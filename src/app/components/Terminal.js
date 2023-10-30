"use client"

import Image from "next/image"
import TypeWriter from 'typewriter-effect'
import React, { useState, useEffect } from 'react';

function AutoTypeCursor({ string, time, onTypingComplete }) {
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        if (!typing) {
            setTyping(true);
            setTimeout(() => {
                onTypingComplete();
            }, time);
        }
    }, [typing, time, onTypingComplete]);

    return (
        <div className="flex">
            <Image src="/icon-flecha-verde.png" width={20} height={20} className="mt-2" />
            <h1 className="mt-2 ml-1 text-cyan-600 font-bold "> ~ </h1>
            <div className="text-white mt-2 ml-3">
                {typing && (
                    <TypeWriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(10)
                                .typeString(`${string}`)
                                .start();
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default function Terminal() {
    const [showName, setShowName] = useState(false);
    const handleTypingComplete = () => {
        setShowName(true);
    };
    return (
        <div className="mt-20 bg-pink-950 w-180 h-120 rounded-xl">
            <div className=" bg-zinc-800 w-180 h-12 rounded-xl">
                <div className=" bg-zinc-800 w-180 h-12 rounded-xl">
                    <Image src="/icon_add_view.png" width={30} height={30} className="absolute mt-3 ml-3 hover:filter hover:brightness-125 rounded-md select-none" />
                    <Image src="/icon_search.png" width={30} height={30} className="absolute mt-3 ml-137 hover:filter hover:brightness-125 rounded-md select-none" />
                    <Image src="/icon_navbar.png" width={30} height={30} className="absolute mt-3 ml-138 hover:filter hover:brightness-125 rounded-md select-none" />
                    <div className="text-white bg-stone-700 w-6 h-6 ml-180 absolute mt-4 text-center font-bold rounded-xl text-sm hover:brightness-125 select-none">x</div>
                    <div className="text-white bg-stone-700 w-6 h-6 ml-160 absolute mt-4 text-center rounded-xl text-sm hover:brightness-125">
                        <div className="w-2 h-2 border-2 absolute mt-2 ml-2 text-center border-white-500"></div>
                    </div>
                    <div className="text-white font-bold bg-stone-700 w-6 h-6 ml-140 absolute mt-4 text-center rounded-xl text-sm hover:brightness-125 select-none">
                        _
                    </div>
                    <div className="text-white font-bold ml-120 absolute mt-3 text-center text-sm select-none">
                        <p>
                            luiseduardo@caicedoduran
                        </p>
                    </div>
                </div>
            </div>
            <AutoTypeCursor string="whoami" time={2500} onTypingComplete={handleTypingComplete} />
            {showName && (
                <p className="text-white ml-2">Luis Eduardo Caicedo Duran</p>
            )}
        </div>
    );
}
