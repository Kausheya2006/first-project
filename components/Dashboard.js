"use client"
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import {fetchuser, updateProfile} from '@/actions/useractions'

const Dashboard = () => {
    const router = useRouter()
    const {data:session} = useSession()
    const [form, setform] = useState({})

    useEffect(()=>{
      
        if (!session){  // if not logged in
          router.push('/login')
          console.log("yeadh not loggedin")
        }
        else{
          console.log("yeadh logged in")
          getData()   // get all data from database
        }
      }, [])

      const getData = async() =>{
            let u = await fetchuser(session.user.name)  
            console.log("aaaaa"+u);
            const plainUser = {
              ...u,
              _id: u._id ? u._id.toString() : '',   // Convert ObjectId to string
              email: u.email || '',                  // Ensure email is a plain string
              username: u.username || '',            // Ensure username is a plain string
              room: u.room || '',                    // Ensure room is a plain string
              contact: u.contact || '',              // Ensure contact is a plain string
          };
          
          setform(plainUser);  
            //setform(u)  // fill the dashboard form with data from database
      }

      const handleSubmit = async(e) =>{
        let a = await updateProfile(e, session.user.name)  // mentioned in useractions.js
        alert("Profile Updated")
      }

      const handleChange = (e) =>{
        setform({...form, [e.target.name]:e.target.value})
      }
  return (
    <div>
       <div className='container mx-auto py-5 px-6 '>
                <h1 className='text-center my-5 text-white text-3xl font-bold'>Welcome to your Dashboard</h1>

                <form className="max-w-2xl mx-auto" action={handleSubmit}>

                    {/* input for email */}
                    <div className="my-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input value={form.email? form.email : ""} onChange={handleChange}  type="email" name='email' id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input forusername */}
                    <div className='my-2'>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="room" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room No</label>
                        <input value={form.room ? form.room : ""} onChange={handleChange} type="text" name='room' id="room" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact No</label>
                        <input value={form.contact ? form.contact : ""} onChange={handleChange} type="text" name='contact' id="contact" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    {/* input for profile picture of input type text */}
                   
                    

                    {/* Submit Button  */}
                    <div className="my-6">
                        <button type="submit" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                    </div>
                </form>


            </div>
           
    </div>
  )
}

export default Dashboard
