import Link from 'next/link';
import React from 'react'
import { IoCaretBackOutline } from 'react-icons/io5';

type IdComponent = {
  params: Promise<{
    id:string
  }>
}

const page = async ({params}: IdComponent) => {
  const resolveParams = await params
  const getData = async () => {
    const response = await fetch(`https://dummyjson.com/users/${resolveParams.id}`)
    const result = await response.json()
    return result
  }

  const user = await getData()

  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className='flex items-center justify-center gap-20'>
        <p className='text-5xl font-bold my-10'>Hello, {user?.firstName}!</p>
        <Link className='bg-[#3f3f3f] p-4 rounded hover:bg-[rgb(49,49,49)] transition flex items-center gap-3' href={'/dashboard/user'}><IoCaretBackOutline />Back</Link>
      </div>
      <div className='flex flex-col items-center'>
        <div className='bg-[#3f3f3f] p-4 rounded hover:bg-[rgb(49,49,49)] transition'>
          {Object.entries(user).map(([key, value]) => (
          <p key={key}>
            {key} : {String(value)}
          </p>
          ))}</div>
      </div>
  </div>
  )
}

export default page