import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../actions/actions'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/esm/Container';

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
          <div className='  py-3 py-md-5'>
            <h1 className=' font-sans text-sky-600 mt-10 text-bold'>
              Create an Account
            </h1>
            <br />
            <p className='font-serif container mx-auto whitespace-normal flex-auto center-alig mr-20 text-lg'>
              Once registered, you will be able to search for episodes of your
              favorite podcast, save episodes to listen to in the future and
              keep track of episodes you have already heard. Lastly, you are
              able to hear the podcast from within the app itself.
            </p>
          </div>

          <div className='static font-sans text-slate-500'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  onChange={e => setFullName(e.target.value)}
                  id='fullName-register'
                  name='fullName'
                  className='border-1 rounded border-black w-100 h-19 text-lg file:form-control'
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
                  className='border-1 rounded border-black w-100 h-19 text-lg file:form-control'
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
                  className='border-1 rounded border-black w-100 h-19 text-lg file:form-control'
                  type='password'
                  placeholder='Create a password'
                />
              </div>
              <button
                type='submit'
                className='font-sans mt-3
              ml-3 pl-3 py-2 px-4 rounded font-bold text-white bg-sky-600'
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
