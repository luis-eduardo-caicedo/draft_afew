"use client"

import React, { useState, useEffect } from 'react';
import styles from "@/app/components/Slider.module.css"


export default function Slider({ users }) {
    const [currentIndex, setCurrentIndex] = useState(0); // Índice actual

    // Duplica la lista de usuarios para crear un ciclo infinito 200 veces
    const duplicatedUsers = Array.from({ length: 200 }, () => users).flat();

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % duplicatedUsers.length);
        }, 2000); // Cambia el valor 2000 para ajustar la velocidad de cambio de diapositivas.

        return () => clearInterval(sliderInterval);
    }, [users]);

    return (
        <section className={`${styles.sliderwrapper}`}>
            <div className={styles.slidertrack}>
                {duplicatedUsers.map((user, index) => (
                    <div
                        className={`${styles.slide} ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={user.avatar} alt={`User ${index}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}
