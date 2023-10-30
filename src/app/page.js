"use client"

import Slider from './components/Slider'
import { CardsUser } from './components/CardsUser'
import CardMain from './components/CardMainPage'
import TypeWriter from 'typewriter-effect'

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

export default async function Home() {

  const users = await fetchUsers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='break-words max-w-xl font-bold text-3xl'>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString('"El arte es la expresión de los más profundos pensamientos por el camino más sencillo."  Albert Einstein')
              .start();
          }}
        />
      </h1>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-10/12 xl:w-auto flex justify-center items-center'>
        <Slider users={users} />
      </div>
      <div className=''>
        <CardsUser users={users} />
      </div>
    </main>
  )
}
