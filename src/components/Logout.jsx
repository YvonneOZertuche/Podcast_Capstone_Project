import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../actions/actions'
import pic2 from './images/pic2.jpg'

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogout = () => {
    //dispatch our action to signout
    dispatch(
      logout(() => {
        navigate('/login')
      })
    )}
  
  return (
    <>
      <div className='font-serif bg-red-500 text-2xl text-end'>
      <button
        className='mr-7 pl-3 text-end py-2 px-5 text-white'
        onClick={(userLogout)}
        >
        Logout Here
      </button>
      </div>
      <div className='divide-y divide-solid divide-black'>
        <img
          className='image-fluid justify-content-center'
          src={pic2}
          value='anna_tarazevich'
          alt='Listen to a podcast'
        />

      </div>
      
    </>

  )
}  
export default Logout
