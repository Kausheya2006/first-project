"use client"
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { createReport } from '@/actions/useractions'

const Report = () => {

    const { data: session } = useSession()
    const [itemform, setitemform] = useState({})
    const router = useRouter()

    useEffect(() => {
        if (!session) {  // if not logged in
            router.push('/login')
        }
    }, [session])

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (itemform.title && itemform.date && itemform.type) {
            await createReport(itemform, session.user.name);
            alert('Report submitted successfully!');
        } else {
            alert('Please fill all required fields!');
        }
    }

    const handleChange = (e) => {
        setitemform({ ...itemform, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mx-auto py-6 px-4">
            <h1 className="text-center my-5 text-white text-3xl font-bold">Report Your Problem</h1>

            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>

                {/* Item Picture */}
                <div className="my-4">
                    <label htmlFor="itempic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture of the item</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="itempic"
                        id="itempic"
                        placeholder="Enter image URL"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                {/* Title */}
                <div className="my-4">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter item title"
                        required
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                {/* Description */}
                <div className="my-4">
                    <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="desc"
                        id="desc"
                        placeholder="Describe the item"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                {/* Date */}
                <div className="my-4">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                    <input
                        onChange={handleChange}
                        type="date"
                        name="date"
                        id="date"
                        required
                        className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                {/* Last Seen */}
                <div className="my-4">
                    <label htmlFor="lastseen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last seen</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="lastseen"
                        id="lastseen"
                        placeholder="Where was it last seen?"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                {/* Type (Lost/Found) */}
                <div className="my-4">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                    <select
                        onChange={handleChange}
                        name="type"
                        id="type"
                        required
                        className="block w-full p-2 text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                        <option value="">Select Status</option>
                        <option value="0">Lost</option>
                        <option value="1">Found</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="my-6">
                    <button
                        type="submit"
                        className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Report
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Report
