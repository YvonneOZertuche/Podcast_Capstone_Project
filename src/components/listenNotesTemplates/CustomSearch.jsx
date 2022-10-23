import React from 'react'
// import {Link} from 'react-router-dom'


const CustomSearch = () => {
  return (
    <>
      <form
        action='https://www.listennotes.com/search/'
        style='display: flex;flex-direction: row;padding: 25px;'>
        <input
          type='text'
          name='q'
          required
          placeholder='Search past episodes'
          // style='flex: 1;padding: 5px 10px 5px 10px;border: 1px solid #DEDEDE;border-radius: 0;'
        />
        <input
          type='submit'
          value='Search'
          // style='background-color: #3f51b5;color: #ffffff;border: 1px solid #3f51b5;cursor: pointer;border-radius: 0;padding: 8px;'
        />
      </form>
    
    </>
  )
}

export default CustomSearch