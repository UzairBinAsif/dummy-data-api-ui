"use client"

import React from 'react'

const Error = (error:{error:Error}) => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
    <div className='flex flex-col items-center'>
      <p className='text-5xl font-bold mb-15'>An Error Occured</p>
    </div>
  </div>
  )
}

export default Error