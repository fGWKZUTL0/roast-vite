import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext }  from "../../App";
import Post from './Post'

import { useSelector } from 'react-redux'
import { selectUser } from '../../reducer/userSlice'

const NavBar = () => {
  const user = useSelector( selectUser )
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  return (
    <Nav className="nav flex-column m-4 w-50">
      <Nav.Link className="nav-link btn-link rounded-pill text-center" as={NavLink} to="/Home">Home</Nav.Link>
      <Nav.Link className="nav-link btn-link rounded-pill text-center" as={NavLink} to="/CreateUser">CreateUser</Nav.Link>
      {isSignedIn ? 
        <>
          <Nav.Link className="nav-link btn-link rounded-pill text-center" as={NavLink} to={"/User/" + user.name}>Profile</Nav.Link>
          <Nav.Link className="nav-link btn-link rounded-pill text-center" as={NavLink} to="/Logout">Logout</Nav.Link> 
        </>
      :
        <Nav.Link className="nav-link btn-link rounded-pill text-center" as={NavLink} to="/Login">Login</Nav.Link>
      }
      <Post />
    </Nav>
  )
}

export default NavBar