import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"
import axios from 'axios'
import Home from './Page/Home'
import CreateUser from './Page/CreateUser.jsx'
import Login from './Page/Login.jsx'
import Logout from './Page/Logout.jsx'
import Header from './Page/Header.jsx'
import NavBar from './components/NavBar.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [timeLine, setTimeLine] = useState([])

  // 認証確認メソッド
  // → 認証されていない場合、ログインページにリダイレクト
  const RequireAuth = ( props ) => {
    
    // 権限が「GENERAL」の場合、渡されたコンポーネントをレンダリング
    if(isSignedIn !== false){
      return props.component;
    }
    // 権限がない場合、ログインページへリダイレクト
    document.location = "/Login";
  }

  // 非認証確認メソッド
  const RequireNoAuth = ( props ) => {

    // 権限がない場合、渡されたこのポーネントをレンダリング
    // ※ ログインページとユーザ新規登録ページに適用
    if(isSignedIn === false){
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
          username,
          setUsername,
          timeLine,
          setTimeLine,
        }}
      >
        <BrowserRouter>
          <div className="row">
            <div className="col-3">
              <NavBar />
            </div>
            <div className="col-6">
              <Header />
              <Routes>
                <Route path="/Home" element={<RequireAuth component={<Home />} />} />
                <Route path='/Login' element={<RequireNoAuth component={<Login />} />} />
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