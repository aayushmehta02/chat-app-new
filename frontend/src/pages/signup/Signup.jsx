import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/UseSignup';
import GenderCheckbox from './GenderCheckbox';
export const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '' ,
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const {loading, signup} = useSignup()

    
    const handleGender = (gender)=>{
        setInputs ({...inputs,  gender})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        await signup(inputs)
    }
  return (
    <div className="w-2/5 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
  <h2 className="text-2xl font-bold pb-5">SignUp</h2>
  <form  onSubmit={handleSubmit}>
    <div className="mb-4">
      <label  className="block mb-2 text-xl font-medium float-left">Full Name</label>
      <input
        type="text"
        id="name"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="Jack  Doe"
        required
        value={inputs.fullName} onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
        />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-xl font-medium float-left"> username</label>
      <input
        type="username"
        id="username"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="jack@mail.com"
        required
        value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})}
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-xl font-medium float-left">Password</label>
      <input
        type="password"
        id="password"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="*********"
        required
        value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}
      />
    </div>
    <div className="mb-4">
      <label  className="block mb-2 text-xl font-medium float-left">Confirm password</label>
      <input
        type="password"
        id="password"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="*********"
        required
        value={inputs.confirmPassword}
        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
      />
    </div>
    
    <GenderCheckbox onCheckboxChange={handleGender} selectedGender={inputs.gender} />
    <div>
      <p className="text-red-500 pb-5"></p>
    </div>
    <div className="flex flex-col items-center justify-between mb-4">
      <button
        type="submit"
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-xl py-2.5 px-5 w-5/6 mb-4 "
      disabled={loading}>
        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
      </button>
      <div className="flex items-center text-sm">
      <Link to={'/login'}>
      <p>Already have an account?</p>
        <p className="underline cursor-pointer ml-1">Sign in</p>
      </Link>
        
      </div>
    </div>
  </form>
</div>
  )
}
