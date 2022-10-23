import React, { useState } from 'react'
import axios from 'axios'

const Update = props => {
  const [isUpdate, setIsUpdate] = useState('')
  const id = props.id
  console.log(id)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(id)
    let testObj = { notes: isUpdate }
    axios.put(`api/v1/following/${id}`, testObj)

    console.log(isUpdate)
  }

  return (
    <>
      <form>
        {/* <input type='text' onChange={e => setIsUpdate(e.target.value)}></input>
        <br  />
        <button
          onClick={e => handleSubmit(e)}
          className='font-serif py-20 mt-4 btn btn-lg btn-danger btn-block'
        >
          Submit
        </button> */}

        <div class='max-w-2xl mx-auto'>
          <label
            for='message'
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
            Your Notes
          </label>
          <textarea
            id='message'
            rows='4'
            class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholde
          ></textarea>

         
          <script src='https://unpkg.com/flowbite@1.4.0/dist/flowbite.js'></script>
        </div>
      </form>
    </>
  )
}

export default Update
