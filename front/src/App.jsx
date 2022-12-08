import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"
import Editor from './Editor'
import Home from './Home'
import CreateUser from './User/CreateUser.jsx'
import Login from './User/Login.jsx'
import Logout from './User/Logout.jsx'
import { getCurrentUser } from './api/auth'
import Header from './Header.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

export const AuthContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState()

  /*
  const handleGetCurrentUser = async () => {
    try {
      const inLogin = await getCurrentUser()
      
      if (inLogin === true) {
        console.log("success")
      } else {
        console.log("no current user")
        return <Login />
      }
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])
  */

  return(
    <div className="App contents">
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
        }}
      >
        <BrowserRouter>
          <div className="row">
            <div className="col-3">
              <ul className="nav flex-column m-4 w-50">
                <li className="nav-item">
                  <Link className="nav-link btn-link rounded-pill" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-link rounded-pill" to="/Editor">Editor</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-link rounded-pill" to="/CreateUser">CreateUser</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-link rounded-pill" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-link rounded-pill" to="/Logout">Logout</Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <Header />
              <Routes>
                <Route path="/Home" element={ getCurrentUser === true ? <Home /> : <Navigate replace to="/Login" />}/>

                <Route path={`/Editor`} element={<Editor />} />
                <Route path={`/CreateUser`} element={<CreateUser />} />
                <Route path={`/Login`} element={<Login />} />
                <Route path={`/Logout`} element={<Logout />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
              </Routes>
            </div>
            <div className="col-3">
            </div>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )  
}

export default App