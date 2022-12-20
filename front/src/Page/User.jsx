import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TweetLine from './components/TimeLine'
import { AuthContext }  from "../App";

import SpinnerTag from './components/SpinnerTag'

const User = () => {
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://localhost:3001/users/show', token)
        .then(res => {
          console.log(res.data)
          setName(res.data.current_user.nickname)
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
        <p>{name}</p>}
    </>
  )
}

export default User