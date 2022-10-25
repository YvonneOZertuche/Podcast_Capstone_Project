import React from 'react'
import FlashMessage from 'react-flash-message'

const flashMessage = () => {
  return (
    <>
    <FlashMessage duration={5000} >
      The podcast has moved to your Following list.
    </FlashMessage>

    
    </>
  )
}

export default FlashMessage