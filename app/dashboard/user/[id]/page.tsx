import React from 'react'

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
  console.log(user);

  return (
    <div>{`hello ${user.firstName}`}</div>
  )
}

export default page