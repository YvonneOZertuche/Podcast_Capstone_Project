import './App.css'
import React from 'react'
import pic1 from './components/images/pic1.jpg'


function App ()  {
  return (
    <>
      <div className='background-color: bg-red-600' variant='light'>
        <img
          className='image-fluid justify-content-center'
          src={pic1}
          value='mohammad-metri-1oKxSKSOowE-unsplash'
          alt='neon sign'
        />
      </div>
    </>
  )
}

export default App

