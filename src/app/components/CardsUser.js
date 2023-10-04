"use client"

import Link from "next/link";

export function CardsUser({ users }) {

    return (
        <ul className="p-20">
            {users?.map(user => (
                <Link
                    key={user.id} href={`/users/${user.id}`}>
                    <li className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between cursor-pointer "
                    >
                        <div>
                            <h5 className="font-bold">{user.id} {user.first_name} {user.last_name} </h5>
                            <p>email: {user.email}</p>
                        </div>
                        <img src={user.avatar} className="rounded-full w-16" /> 
                    </li>
                </Link>
            ))}
        </ul>
    )
}