import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App"

import Spinner from 'react-bootstrap/Spinner'

const Logout = () => {
  const navigate = useNavigate()
  const { setIsSignedIn, token, setToken } = useContext(AuthContext)

	useEffect(() => {
  	const logoutPath = 'http://localhost:3001/auth/sign_out'
    // ログアウト API へ POST
    axios.delete(logoutPath, token)
    .then((res)=>{
      if(res.data.success === true){
        setIsSignedIn(false)
        setToken([])

        // ログインページへリダイレクト
        document.location = '/Login'
      }
      console.log(res.data.success)
    })
  }, [])

  return(
    <Spinner animation="border" role="status" variant="danger">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Logout