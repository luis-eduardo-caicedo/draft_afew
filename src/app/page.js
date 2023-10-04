import Slider from './components/Slider'
import { CardsUser } from './components/CardsUser'

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

export default async function Home() {

  const users = await fetchUsers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className='font-bold text-3xl'>"El arte es la expresión de los más profundos pensamientos</p>
      <p className='font-bold text-3xl'> por el camino más sencillo."</p>
      <p className='text-lg'> Albert Einstein</p>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-10/12 xl:w-auto flex justify-center items-center'>
        <Slider users={users} />
      </div>
      <div className=''>
        <CardsUser users={users} />
      </div>
    </main>
  )
}
