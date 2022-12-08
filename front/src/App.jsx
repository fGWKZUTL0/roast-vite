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
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    console.log("useEffect")
  }, [isSignedIn])

  // 認証確認メソッド
  // → 認証されていない場合、ログインページにリダイレクト
  const RequireAuth = ( props ) => {
    const myAuthority = sessionStorage.getItem('AUTHORITY')

    // 権限が「GENERAL」の場合、渡されたコンポーネントをレンダリング
    if(myAuthority !== null){
      return props.component;
    }
    // 権限がない場合、ログインページへリダイレクト
    document.location = "/Login";
  }

  // 非認証確認メソッド
  const RequireNoAuth = ( props ) => {
    const myAuthority = sessionStorage.getItem('AUTHORITY');

    // 権限がない場合、渡されたこのポーネントをレンダリング
    // ※ ログインページとユーザ新規登録ページに適用
    if(myAuthority === null){
      return props.component;
    }
    // 権限が存在する場合、メディア一覧ページへリダイレクト
    document.location = "/Home";
  }

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
                  {isSignedIn ? <Link className="nav-link btn-link rounded-pill" to="/Logout">Logout</Link> :
                   <Link className="nav-link btn-link rounded-pill" to="/Login">Login</Link>}
                </li>
              </ul>
            </div>
            <div className="col-6">
              <Header />
              <Routes>
                <Route path="/Home" element={<RequireAuth component={<Home />} />} />
                <Route path='/Login' element={<RequireNoAuth component={<Login />} />} />
                <Route path={'/Tweet'} element={<Tweet />} />
                <Route path={'/CreateUser'} element={<CreateUser />} />
                <Route path={'/Logout'} element={<Logout setIsSignedIn={setIsSignedIn} />} />
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