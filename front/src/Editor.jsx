import React, { useState, useEffect } from 'react'
import Header from './Header'
import TweetList from './Tweet/TweetList'

const Editor = () => {
  const [tweets, setTweets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('http://localhost:3001/tweets/index', {method: "get"})
        if (!response.ok) throw Error(response.statusText)
        const data = await response.json()
        setTweets(data)
      } catch (error) {
        setIsError(true)
        console.error(error)
      }

      setIsLoading(false)
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