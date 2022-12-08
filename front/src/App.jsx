import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"
import axios from 'axios'
import Tweet from './Tweet/Tweet'
import Home from './Home'
import CreateUser from './User/CreateUser.jsx'
import Login from './User/Login.jsx'
import Logout from './User/Logout.jsx'
import Header from './Header.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  // ログインユーザーの取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://localhost:3001//sessions/index')
        .then(res => {
          console.log(res.data.message)
          if(res.data.id){
            setIsSignedIn(true)
          }
        })
      } catch (error) {
        console.log("error!")
        setIsSignedIn(false)
      }
    }
    fetchData()
  })

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
                  <Link className="nav-link btn-link rounded-pill" to="/Tweet">Tweet</Link>
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
                <Route path="/Home" element={ isSignedIn === true ? <Home /> : <Navigate replace to="/Login" />}/>

                <Route path={`/Tweet`} element={<Tweet />} />
                <Route path={`/CreateUser`} element={<CreateUser />} />
                <Route path={`/Login`} element={<Login />} />
                <Route path={`/Logout`} element={<Logout setIsSignedIn={setIsSignedIn} />} />
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