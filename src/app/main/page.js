import CardMain from '@/app/components/CardMainPage'

async function GetImages(){
    const res = await fetch('https://picsum.photos/v2/list?page=10&limit=40')
    const data = await res.json()
    return data
  }

export default async function MainPage() {

    const imgs = await GetImages()

    return (
        <div className="">
            {<CardMain images={imgs} />}
        </div>
    )
}