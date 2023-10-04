
async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

export default async function UserPage({ params }) {

    const user = await getUser(params.id)

    return (
        <div class="flex items-center h-auto w-full justify-center">
 
            <div class="max-w-xs">
                <div class="bg-slate-200 shadow-2xl rounded-lg py-3">
                    <div class="photo-wrapper p-2">
                        <img class="w-32 h-32 rounded-full mx-auto" src={user.avatar} alt="John Doe" />
                    </div>
                    <div class="p-2">
                        <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user.first_name}</h3>
                        <div class="text-center text-gray-400 text-xs font-semibold">
                            <p>Web Developer</p>
                        </div>
                        <table class="text-xs my-3">
                            <tbody>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Last name</td>
                                    <td class="px-2 py-2">{user.last_name}</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td class="px-2 py-2">{user.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}