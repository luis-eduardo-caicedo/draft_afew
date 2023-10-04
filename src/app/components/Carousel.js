"use client"
import '@/src/components/Slider.module.css'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export function Carousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ['https://cdn-icons-png.flaticon.com/256/4494/4494488.png', 'https://img.freepik.com/vector-premium/linda-pequena-abeja-dibujos-animados-sosteniendo-flor_188253-3798.jpg', 'https://www.calzadosjuscar.com/img/modulos/stock0000624/productos/IMG_356__1.jpg']; // Reemplaza con tus propias imágenes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="carousel flex">
            <div className="carousel-container">
                {images.map((image, index) => (
                    
                    <div
                        key={image}
                        className={`carousel-image  ${index === currentImage ? 'visible' : currentImage}`}
                        style={{ height: '300px', width: '400px' }}
                    >
                        <img className='flex' src={image} alt="Imagen del carrusel" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        <div className="carousel-controls p-1">
                            <button className='flex' onClick={() => setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)}>
                                Anterior
                            </button>
                            <button onClick={() => setCurrentImage((prevImage) => (prevImage + 1) % images.length)}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default Carousel;
