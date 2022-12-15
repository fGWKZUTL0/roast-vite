import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TweetLine from '../components/TimeLine'
import { AuthContext }  from "../App";


const Home = ({ children }) => {
  const [tweets, setTweets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { timeLine, setTimeLine } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://localhost:3001/tweets/index')
        .then(res => {
          console.log(res.data)
          setTweets(res.data)
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

      {isLoading ? <p>Loading...</p> : <TweetLine tweets={tweets} />}
    </>
  )
}

export default Home