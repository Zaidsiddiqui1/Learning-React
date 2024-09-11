'use client'

import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
  //   const [users, setUsers] = useState([])
  //   const getUsers = async () => {
  //     // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  //     // const data = res.data
  //     // console.log(data)
  //     const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  //     // console.log(data)
  //     setUsers(data)
  //   }
  //   useEffect(() => {
  //     getUsers()
  //   }, [])
  
  //   return (
  //     <>
  //       <button onClick={getUsers} className="px-4 py-2 font-bold text-white bg-green-600 rounded">Get Data</button>
  //       <div className="p-8 mt-5 text-black bg-slate-100">
  //         <ul>
  //           {users.map((e) => {
  //             return <li>{e.username} --- <a href={`${e.id}`}>Explore</a></li>
  //           })}
  //         </ul>
  //       </div>
  //     </>
  //   )
  // }
  
import Header from '@/Components/Header'
import { MyContext } from "@/Helper/Context"

// const page = () => {
//     const [num, setNum] = useState(10)
//     return (
//       <div>
//         <Header num={num} />
//       </div>
//     )
//   }
// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)
//   return (
//     <div>
//       {user}
//       <Header />
//     </div>
//   )
// }



// //React-Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)
//   const notify = () => {
//     // console.log('Heyyyy')
//     toast('Login Successful')
//   }
//   return (
//     <div>
//       <button onClick={notify} className="px-4 py-2 bg-green-600 rounded">Login</button>
//       <ToastContainer/>
//     </div>
//   )
// }


// // APIs
// const page = () => {
//   const [num, setNum] = useState(10)
//   const getData = async () => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     console.log(res)
//   }
//   return (
//     <div>
//       <button onClick={getData} className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700">Click</button>
//     </div>
//   )
// }

// Deployment
// upload the folder on github
// goto dashboard.render.com
const page = () => {
  return (
    <div>
      Deployment
    </div>
  )
}
export default page
