import React, { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios'
import TweetLine from './components/TimeLine'
import { AuthContext }  from "../App";
import Post from './components/Post'
import SpinnerTag from './components/SpinnerTag'

export const TweetContext = createContext()

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { token } = useContext(AuthContext)
  const [tweets, setTweets ]  = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://localhost:3001/tweets/index', token)
        .then(res => {
          setTweets(res.data.tweets)
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

      {isLoading 
      ?  <SpinnerTag />
      : <TweetContext.Provider
        value={{
          tweets,
          setTweets
        }}>
          <Post />
          <TweetLine tweets={tweets} />
        </TweetContext.Provider>}
    </>
  )
}

export default Home