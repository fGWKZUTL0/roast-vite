import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"
import Editor from './Editor'
import Home from './Home'
import CreateUser from './User/CreateUser.jsx'
import Login from './User/Login.jsx'
import Logout from './User/Logout.jsx'
import { getCurrentUser } from './api/auth'
import Header from './Header.jsx'

import { PrivateRoute } from './router/PrivateRouter'

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
          <div className="flex flex-wrap">
            <div className="w-1/4">
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/Editor">Editor</Link>
                </li>
                <li>
                  <Link to="/CreateUser">CreateUser</Link>
                </li>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/Logout">Logout</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
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
          </div>
          <div className="w-1/4">

          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )  
}

export default App