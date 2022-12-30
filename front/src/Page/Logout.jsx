import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App"

import { useDispatch } from 'react-redux'
import { resetCurrentuser } from '../reducer/currentUserSlice'

import SpinnerTag from './components/SpinnerTag'

const Logout = () => {
  const dispatch = useDispatch()

  const { setIsSignedIn, token, setToken } = useContext(AuthContext)

	useEffect(() => {
  	const logoutPath = 'http://localhost:3001/auth/sign_out'
    // ログアウト API へ POST
    axios.delete(logoutPath, token)
    .then((res)=>{
      if(res.data.success === true){
        setIsSignedIn(false)
        setToken([])
        dispatch(resetCurrentuser())
        localStorage.clear()
        // ログインページへリダイレクト
        document.location = '/Login'
      }
      console.log(res.data.success)
    })
  }, [])

  return(
    <SpinnerTag />
  )
}

export default Logout