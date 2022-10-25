import React from "react"


import Menu from './Menu'


const BaseLayout = props => {
  return (
    <>
     <Menu  />



      {/* this is putting the Menu on every page so keep this line */}

      {props.children}
    </>
  )
}

export default BaseLayout
