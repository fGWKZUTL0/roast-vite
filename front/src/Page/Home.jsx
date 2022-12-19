import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TweetLine from '../components/TimeLine'
import { AuthContext }  from "../App";
import SpinnerTag from '../components/SpinnerTag'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { token, tweets } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://localhost:3001/tweets/index', token)
        .then(res => {
          console.log(res.data)
          tweets.current = res.data
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
      : <TweetLine tweets={tweets.current} />}
    </>
  )
}

export default Home