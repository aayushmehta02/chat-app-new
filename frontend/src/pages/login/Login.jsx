import React from 'react';
import { Link } from "react-router-dom";
const Login = ()  =>{
  return (
    <div class="w-2/5 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5">LOG IN</h2>
    <form >
     
      <div class="mb-4">
        <label for="email" class="block mb-2 text-xl font-medium float-left"> Email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="jack@mail.com"
          required
         
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 text-xl font-medium float-left">Password</label>
        <input
          type="password"
          id="password"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="*********"
          required
          
        />
      </div>
      
      
     
      <div>
        <p class="text-red-500 pb-5"></p>
      </div>
      <div class="flex flex-col items-center justify-between mb-4">
        <button
          type="submit"
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-xl py-2.5 px-5 w-5/6 mb-4 "
        >
          LOG IN!
        </button>
        <div class="flex items-center text-sm">
        <Link to={'/signup'}>
        <p>Haven't signed in yet?</p>
          <p class="underline cursor-pointer ml-1">Register</p>
        </Link>
          
        </div>
      </div>
    </form>
  </div>
  )
}

export default Login