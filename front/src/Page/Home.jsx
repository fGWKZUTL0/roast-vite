import React, { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios'
import TweetLine from './components/TimeLine'
import { AuthContext }  from "../App"
import SpinnerTag from './components/SpinnerTag'

import { useSelector, useDispatch } from 'react-redux'
import { initTweets, selectTweets } from '../reducer/tweetsSlice'

const Home = () => {
  const dispatch = useDispatch()
  const tweets = useSelector( selectTweets )

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://localhost:3001/tweets/index', token)
        .then(res => {
          console.log(res.data.tweets)
          dispatch(initTweets(res.data.tweets))

          setIsLoading(false)
        })
      } catch (error) {
        setIsError(true)
      }
      //console.log(tweets)
    }
    fetchData()
  }, [])

  return (
    <>
      {isError && <p>Something went wrong. Check the console.</p>}

      {isLoading 
      ?  <SpinnerTag />
      : 
        <>
          <TweetLine tweets={tweets} />
        </>
      }
    </>
  )
}

export default Home