"use client"

import React, { useEffect, useState } from 'react'

const page = () => {

    const [users, setUsers] = useState([])

    const getData = async () => {
        const response = await fetch("https://dummyjson.com/users")
        const result = await response.json()
        console.log(result.users)
        setUsers(result.users)
        console.log(users)
    }
    console.log(users)

    useEffect(() => {
        getData()
    }, [])
  return (
    <div>ok</div>
  )
}

export default page