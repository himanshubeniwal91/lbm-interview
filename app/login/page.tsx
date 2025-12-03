import React from 'react'

export default function page() {
  return (
  <>
   <div className="h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80">


        
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

    
        <label className="block mb-2 text-sm font-medium">Username</label>
        <input type="text" placeholder="Enter username" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

      
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input type="password" placeholder="Enter password" className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"/>

    
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>


      </form>
    </div>
  </>
  )
}
