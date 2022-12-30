import { createContext, useEffect, useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, useNavigate , Link } from "react-router-dom"
import axios from 'axios'
import store from './Store'
import { Provider } from 'react-redux'

import Home from './Page/Home'
import User from './Page/User'
import CreateUser from './Page/CreateUser.jsx'
import Login from './Page/Login.jsx'
import Logout from './Page/Logout.jsx'
import Header from './Page/Header.jsx'
import NavBar from './Page/components/NavBar.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthContext = createContext()

function App() {

  const [loading, setLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [token, setToken] = useState({
    headers:{
      'uid': localStorage.getItem('uid'),
      'access-token': localStorage.getItem('access-token'),
      'client': localStorage.getItem('client'),
      'expiry': localStorage.getItem('expiry'),
      'token-type': localStorage.getItem('token-type'),
    }
  })

  useEffect(() => {
    if(isSignedIn === false){
      axios.get('http://localhost:3001/users/index', token)
      .then(res => {
        if(res.data.success === true){
          setIsSignedIn(true)
        }
        setLoading(false)
      })
    }
  }, [])

  const RequireAuth = ( props ) => {
    if(isSignedIn === true){
      return props.component
    }
    document.location = "/Login"
  }

  const RequireNoAuth = ( props ) => {
    if(isSignedIn === false){
      return props.component
    }
  }

  return(
    <div className="App contents">
      { loading ?
        <></>
      :
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          token,
          setToken,
        }}
      >
      <Provider store={store}>
        <BrowserRouter>
          <div className="row">
            <div className="col-3">
              <NavBar />
            </div>
            <div className="col-5">
              <Header />
              <Routes>
                <Route path="/Home" element={<RequireAuth component={<Home />} />} />
                <Route path='/Login' element={<RequireNoAuth component={<Login />} />} />
                <Route path={'/CreateUser'} element={<CreateUser />} />
                <Route path={'/Logout'} element={<Logout setIsSignedIn={setIsSignedIn} />} />
                <Route path="/User/:name" element={<RequireAuth component={<User />} />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
              </Routes>
            </div>
            <div className="col-4">
            </div>
          </div>
        </BrowserRouter>
      </Provider>
      </AuthContext.Provider>
      }
    </div>
  )  
}

export default App