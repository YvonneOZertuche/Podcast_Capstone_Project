import React, { useState } from 'react'
// import { Link } from "react-router-dom";  //this will be used if we link out to the registration page
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../actions/actions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    try {
      dispatch(
        login({ email, password }, () => {
          navigate('/SearchPodcast')
        })
      )
    } catch (error) {
      console.log('e.response.data')
      alert('Email or password are incorrect')
    }
  }

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-2xl font-serif tracking-tight text-red-600'>
              Log into your account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='font-serif relative block w-full appearance-none rounded-none  border-red-600 px-3 py-2 text-white-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
                  placeholder='Email address'
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <br />
              <br />
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='font-serif relative block w-full appearance-none rounded-none  border-red-600 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-400 focus:outline-none focus:ring-red-500 sm:text-sm'
                  placeholder='Password'
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'></div>
            </div>

            <div>
              <button
                type='submit'
                className='font-serif text-white group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-md   font-xlarge text-bold-black hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2'
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

