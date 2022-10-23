import axios from 'axios'
import React, { useState } from 'react'



const Update = (props) => {
  const [isUpdate, setIsUpdate] = useState('')
  const id = props.id

  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    let testObj = {"notes":isUpdate}
    axios.put(`api/v1/listened/${id}`, testObj)
 
    console.log(isUpdate)

    window.location.reload(true);

  }
  

  return (
  
    <>
     <form >
     <div className='background-color: bg-red-400' variant='light'>
      <input type = 'text' onChange={(e) => setIsUpdate(e.target.value)}></input>
      <button onClick={(e) => handleSubmit(e)}className='font-serif py-20 mt-4 btn btn-lg btn-danger btn-block'>
        Submit
      </button>
      </div>
    </form> 

    </>
  )
}

export default Update
