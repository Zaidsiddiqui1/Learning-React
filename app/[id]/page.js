'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const { id } = params

    const [users, setUsers] = useState('')
    const getUsers = async () => {
        // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        // const data = res.data
        // console.log(data)
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        // console.log(data)
        // setUsers(data.username)
        setUsers(data)
    }
    useEffect(() => {
        getUsers()
    }, [])

  return (
      <>
          {/* {users} */}
          {JSON.stringify(users)}
      </>
  )
}

export default page
