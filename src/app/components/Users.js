
export default function Users({persons}) {

    return (
        < ul className='' >
            {
                persons.map(person => (
                    <li className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between">
                        <div>
                            <h5 className='font-bold'>{person.id}. {person.first_name} {person.last_name}</h5>
                            <p className='text-slate-200'>email: {person.email}</p>
                        </div>
                        <img src={person.avatar} className='rounded-full w-20' />
                    </li>
                ))
            }
        </ul >
    )
}