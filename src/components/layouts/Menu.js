import React, { useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// function Menu () {
//   //if localstorage token returns, then you may access search, following, listened, logout
//   //if not, you can see register and login

//   //log in/log out requires refresh - solve second
//   // const [navSnippet, setNavSnippet] = useState(null)
//   const [token, setToken] = useState(localStorage.token)

 
//   useEffect(() => {
    
//     console.log();
//   }, [token])
  
  

 function Menu () {
  return (
    <>
      <Navbar className='bg-sky-700'>
        <Container>
          <Navbar.Brand className='text-white text-xl' href='/'>You Are What You Listen To</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link className='text-white text-sm' href='/listened'>Podcasts You've Listened To</Nav.Link>
            <Nav.Link className='text-white text-sm' href='/following'>Podcasts Your're Following</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='text-white text-sm' href='/searchpodcast'>Search</Nav.Link>
            <Nav.Link className='text-white text-sm' href='/register'>Create Account</Nav.Link>
            <Nav.Link className='text-white text-sm' href='/login'>Login</Nav.Link>
            <Nav.Link className='text-white text-sm' href='/logout'>Quit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}



export default Menu;
