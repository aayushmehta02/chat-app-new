import React from 'react';
import { Link } from "react-router-dom";
const Login = ()  =>{
  return (
    <div className='flex flex-col items-center justify-center w-screen h-auto mx-auto'>
        <div className='h-full w-1/3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border flex flex-col items-center justify-center border-gray-100 '>
            <h1 className="text-2xl font-bold flex items-center justify-around ">Login   &nbsp; &nbsp; &nbsp;
            <span className='text-blue-500'>  ChatApp</span></h1>
            <form>
                <div className='p-3 w-50'>
                    <label className='label'>
                        <span className='text-base leabel-text'>Username:</span>
                    </label>
                    <input
							type='text'
							placeholder='Enter username'
							className='input input-bordered input-black w-full max-w-xs  ' />
                </div>
                <div className='p-3'>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='input input-bordered input-black w-full max-w-xs'/>

                </div>
                    

                <div className='flex flex-col items-center justify-between p-3  w-full'>
                    <button className="btn btn-success w-5/6">LOG IN!</button>
                    <Link to='/signup'> <h3 className='text-sm hover:underline'>HAVEN'T SIGNED UP YET?</h3></Link>
                </div>
            </form>
        </div>
'
    </div>
  )
}

export default Login