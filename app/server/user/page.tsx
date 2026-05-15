import React from 'react'

const page = async () => {
    const getData = async () => {
        const response = await fetch("https://dummyjson.com/users")
        const result = await response.json()
        return result
    }

    console.log(await getData())
  return (
    <div>ok</div>
  )
}

export default page