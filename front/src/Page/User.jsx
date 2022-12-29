import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { AuthContext }  from "../App";

import SpinnerTag from './components/SpinnerTag'

const User = () => {
  const {nickname} = useParams()

  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.post('http://localhost:3001/users/show', { nickname: nickname }, token)
        .then(res => {
          console.log(res.data)
          setUser(res.data.user)
          setIsLoading(false)
        })
      } catch (error) {
        setIsError(true)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {isError && <p>Something went wrong. Check the console.</p>}

      {isLoading ? 
        <SpinnerTag />
      : 
        <p>{user.nickname}</p>}
    </>
  )
}

export default User