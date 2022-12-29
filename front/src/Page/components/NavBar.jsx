import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext }  from "../../App";
import Post from './Post'

const NavBar = () => {

  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  return (
    <Nav className="nav flex-column m-4 w-50">
      <li className="nav-item">
        <Link className="nav-link btn-link rounded-pill text-center" to="/Home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn-link rounded-pill text-center" to="/User">User</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn-link rounded-pill text-center" to="/CreateUser">CreateUser</Link>
      </li>
      <li className="nav-item">
        {isSignedIn ? <Link className="nav-link btn-link rounded-pill text-center" to="/Logout">Logout</Link> :
        <Link className="nav-link btn-link rounded-pill text-center" to="/Login">Login</Link>}
      </li>
      <li>
        <Post />
      </li>
    </Nav>
  )
}

export default NavBar