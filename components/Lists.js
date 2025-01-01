"use client"
import React, { useEffect, useState } from 'react'
import { fetchAllReports, deleteReport, fetchuser } from '@/actions/useractions'
import Link from 'next/link'
const Lists = () => {
  const [reports, setReports] = useState([])

  // Function to fetch user data for each report email

  useEffect(() => {
    const getReports = async () => {
      const allReports = await fetchAllReports()
      setReports(allReports)
    }

    getReports()
  }, [])

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to claim this report? (Reload after done)')
    if (isConfirmed) {
      await deleteReport(id)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-center text-white text-xl font-bold mb-8">All Pending Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.length === 0 ? (
          <p className="text-center text-white">No reports available.</p>
        ) : (
          reports.map((report) => (
            <div key={report._id} className="bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col space-y-4">
              <img
                src={report.photo}
                alt="Picture not found :("
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-semibold text-gray-50">{report.type === 0 ? '[LOST]' : '[FOUND]'}</h2>
                <h3 className="text-2xl font-semibold text-gray-50">{report.title}</h3>
                <p className="text-gray-200"><strong>Description: </strong>{report.desc}</p>
                <div className="text-sm text-gray-400">
                  <div><strong>Last seen:</strong> {report.lastseen}</div>
                  <div><strong>From:</strong> {report.email}  
              
                    <ul>
                      <li>username: {report.uname}, </li>
                      <li>Contact: {report.contact}</li>
                      <li>Room: {report.room}</li> 
                      </ul>
                  </div>
                  <div><strong>Date:</strong> {new Date(report.date).toLocaleDateString()}</div>
                </div>

                <button onClick={() => handleDelete(report._id)} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Claim
                </button>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Lists
