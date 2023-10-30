import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export default function CardMain({ images }) {

    return (
        <Fragment>
            <section className="px-24 my-20 grid gap-12 grid-cols-gallery">
                {images.map((img) => (
                    <div key={img.id} className="h-56 bg-gray-400 rounded-2xl relative group">
                        <div className="absolute inset-0">
                            <Image
                                src={img.download_url}
                                fill
                                style={{ objectFit: "cover" }}
                                className="w-full h-full rounded-2xl"
                            />
                        </div>
                        <div className="absolute inset-0 gradient-overlay bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity rounded-2xl  cursor-pointer">
                        </div>
                        <div className="absolute bottom-2 left-1 opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity  cursor-pointer">
                            <Image src="/user.png" alt='Icon' width={75} height={75} className="px-4 py-2 rounded-full" />
                            <div>
                                <p className='text-slate-50 text-xl'> Mirada al mar</p>
                                <h6 className='text-slate-50 text-xs'>{img.author}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Fragment>

    )
}
