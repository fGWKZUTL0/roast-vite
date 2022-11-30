import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Editor from './Editor'
import Home from './Home'
import CreateUser from './User/CreateUser'
import Login from './User/Login'
import { getCurrentUser } from './api/auth'
import { PrivateRoute } from './router/PrivateRouter'

export const AuthContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState()

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)
        console.log(res?.data.data)
      } else {
        console.log("no current user")
        return <Navigate to="Login" replace/>
      }
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children
      } else {
        return <Navigate to="Login" replace/>
      }
    } else {
      return <></>
    }
  }

  return(
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
        <Routes>
          <Route path={`/Home`} element={<Home />} />
          <Route path={`/Editor`} element={<Editor />} />
          <Route path={`/CreateUser`} element={<CreateUser />} />
          <Route path={`/Login`} element={<Login />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )  
}

export default App