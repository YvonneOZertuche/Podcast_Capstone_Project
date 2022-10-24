import axios from 'axios'
import React, { useState } from 'react'

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
  
     <form >
      <input type = 'text' onChange={(e) => setIsUpdate(e.target.value)}></input>
      <br  />
      <button className='rounded ml-2 pl-2 justify-center font-sans bg-sky-600 py-2 px-4  text-white' onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </form> 
    

    </>
  )
}

export default Update