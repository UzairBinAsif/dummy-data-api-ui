import Link from 'next/link';
import React from 'react'

const page = () => {
  return (<div className='flex flex-col h-screen justify-center items-center'>
    <div className='flex flex-col items-center'>
      <p className='text-5xl font-bold mb-15'>Welcome!</p>
      <Link className='bg-[#3f3f3f] p-4 rounded hover:bg-[rgb(49,49,49)] transition' href={'/dashboard/user'}>View Users' Data</Link>
    </div>
  </div>
  )
}

export default page