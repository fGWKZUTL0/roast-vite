import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TimeLine from './TimeLine'

const Tweet = () => {
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

      {isLoading ? <p>Loading...</p> : <TimeLine tweets={tweets} />}
    </>
  )
}

export default Tweet