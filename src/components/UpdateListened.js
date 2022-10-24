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
     <div>
      <input type = 'text' onChange={(e) => setIsUpdate(e.target.value)}></input>
      <button onClick={(e) => handleSubmit(e)}className='rounded ml-2 pl-2 justify-center font-sans bg-red-600 py-2 px-4  text-white'>
        Submit
      </button>
      </div>
    </form> 

    </>
  )
}

export default Update
