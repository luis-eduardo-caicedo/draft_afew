import Link from "next/link"

export function Navbar() {
    return (
        <nav className="bg-slate-200 mb-4 flex justify-start items-center px-20 p-8 font-bold text-black">
            <Link href="/" className="">

                <img className="h-20 mr-14" src="logo_afew.png" />
            </Link>

            <ul className="flex mr-10 ">
                <li>
                    <Link href="/about" className="mr-10 hover:text-gray-500">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/store" className="mr-10 hover:text-gray-500">
                        Store
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-gray-500">
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="flex flex-row items-center justify-end gap-4 ml-120 ">
                <button className="rounded-2xl bg-slate-800 px-4 py-2 font-bold leading-none text-white hover:text-gray-500">Log in</button>
                <button className="font-bold hover:text-gray-400">Sign up</button>
            </div>
        </nav>
    )
}