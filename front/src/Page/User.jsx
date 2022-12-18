import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TweetLine from '../components/TimeLine'
import { AuthContext }  from "../App";

import Spinner from 'react-bootstrap/Spinner'

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
          setName(res.data.current_user.id)
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
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      : 
        <p>{name}</p>}
    </>
  )
}

export default User