import axios from 'axios'
import React, { useState } from 'react'
import Modal from './Modal'
import Updates from './Updates'


const Update = (props) => {
  const [isUpdate, setIsUpdate] = useState('')
  const id = props.id

  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    let testObj = {"notes":isUpdate}
    axios.put(`api/v1/following/${id}`, testObj)
 
    console.log(isUpdate)
    window.location.reload(true);

  }
  

  return (
  
    <>

    <Updates />
     {/* <form >
    
      <input type = 'text' onChange={(e) => setIsUpdate(e.target.value)}></input>
      <button onClick={(e) => handleSubmit(e)}className='font-serif py-20 mt-4 btn btn-lg btn-danger btn-block'>
        Submit
      </button>
    </form>  */}

    </>
  )
}

export default Update