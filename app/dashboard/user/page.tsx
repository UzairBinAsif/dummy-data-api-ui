"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = () => {
  interface UserData {
    id: 1,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
      color: string,
      type: string,
    }
    ip: string,
    address: {
      address: string,
      city: string,
      state: string,
      stateCode: string,
      postalCode: string,
      coordinates: {
        lat: number,
        lng: number,
      }
      country: string,
    }
    macAddress: string,
    university: string,
    bank: {
      cardExpire: string,
      cardNumber: string,
      cardType: string,
      currency: string,
      iban: string,
    }
    company: {
      department: string,
      name: string,
      title: string,
      address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {  
          lat: number,
          lng: number,
        }
        country: string,
      }
    }
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
      coin: string,
      wallet: string,
      network: string,
    }
    role: string,
  }

    const [users, setUsers] = useState([])

    const getData = async () => {
        const response = await fetch("https://dummyjson.com/users")
        const result = await response.json()
        setUsers(result.users)
    }
    useEffect(() => {
        getData()
    }, [])
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <ul className='flex gap-8 flex-wrap w-[80vw] justify-center items-center'>{users.map((item : UserData) => (
        <li key={item.id} className='bg-[#3f3f3f] text-white transition hover:text-black hover:bg-[rgb(205,205,205)] rounded-lg px-3 py-1 cursor-pointer'>
          <Link href={`/dashboard/user/${item.id}`}>{item.firstName}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default page