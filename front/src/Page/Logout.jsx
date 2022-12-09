import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App";

const Logout = () => {
  const navigate = useNavigate()
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

	useEffect(() => {
  	const logoutPath = 'http://localhost:3001/sessions/destroy'
    // ログアウト API へ POST
    axios.get(logoutPath)
    .then((response)=>{
      // Cookies の JWTTOKEN のバリューを削除
      document.cookie = "JWTTOKEN=; SameSite=None; Secure"
      // SessionStorage の認可情報を削除
      sessionStorage.removeItem('AUTHORITY')
      setIsSignedIn(false)
      // ログインページへリダイレクト
      navigate('/Login')
    })
  }, [])

  return(
    <>
      <p>Loading...</p>
    </>
  )
}

export default Logout