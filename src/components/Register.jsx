import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../actions/actions'



const Register = () => {
  const [fullname, setFullName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      register({ fullname, email, password }, () => {
        console.log('User was successfully created')
        navigate('/login')
      })
    )
  }

  return (
    <>

    <container>

      <div className='justify-center ml-10 mr-10 '>
        <div className='justify-center col-lg-7 py-3 py-md-5'>
          <h1 className='text-center font-serif text-red-600 mt-10 text-bold'>
            Register
          </h1>
          <br />
          <p className='font-serif container mx-auto whitespace-normal flex-auto center-alig mr-20 text-lg'>
            Once registered, you will be able to search for episodes of your
            favorite podcast, save episodes to listen to in the future and keep
            track of episodes you have already heard.  Lastly, you are able to hear the podcast from within the app itself.
          </p>
        </div>


        
        <div className='static font-serif  text-slate-500'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                onChange={e => setFullName(e.target.value)}
                id='fullName-register'
                name='fullName'
                className='border-1 border-red-600 w-100 h-19 text-lg file:form-control'
                type='text'
                placeholder='Enter your Name'
                autoComplete='off'
              />
            </div>
            <br />
            <div className='form-group'>
              {''}
              <input
                onChange={e => setEmail(e.target.value)}
                id='email-register'
                name='email'
                className='border-1 border-red-600 w-100 h-19 text-lg file:form-control'
                type='text'
                placeholder='Enter your email '
                autoComplete='off'
              />
            </div>
            <br />
            <div className='form-group'>
       
       
              <input
                onChange={e => setPassword(e.target.value)}
                id='password-register'
                name='password'
                className='border-red-700 w-100 h-19 text-lg file:form-control'
                type='password'
                placeholder='Create a password'
              />
            </div>
            <button
              type='submit'
              className='font-serif py-20 mt-4 btn btn-md btn-danger btn-block'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      </container>


    </>
  )
}

export default Register