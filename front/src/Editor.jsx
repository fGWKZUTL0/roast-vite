import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TweetList from './Tweet/TweetList'

const Editor = () => {
  const [tweets, setTweets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

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

      {isLoading ? <p>Loading...</p> : <TweetList tweets={tweets} />}
    </>
  )
}

export default Editor