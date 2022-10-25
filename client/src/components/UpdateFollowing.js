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
  
     <Modal  />
    

    </>
  )
}

export default Update