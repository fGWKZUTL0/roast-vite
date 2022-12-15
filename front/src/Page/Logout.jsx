import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App"

const Logout = () => {
  const navigate = useNavigate()
  const { setUsername, setIsSignedIn } = useContext(AuthContext)

	useEffect(() => {
  	const logoutPath = 'http://localhost:3001//auth/sign_out'
    // ログアウト API へ POST
    axios.delete(logoutPath,{ headers: {
      "uid": sessionStorage.getItem('uid'),
      "client": sessionStorage.getItem('client'),
      "access-token": sessionStorage.getItem('access-token'),
    }})
    .then((res)=>{
      if(res.data.success === true){
        setIsSignedIn(false)
        // ログインページへリダイレクト
        navigate('/Login')
      }
      console.log(res.data.success)
    })
  }, [])

  return(
    <>
      <p>Loading...</p>
    </>
  )
}

export default Logout