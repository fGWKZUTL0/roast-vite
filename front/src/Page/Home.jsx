import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import TweetLine from '../components/TimeLine'
import { AuthContext }  from "../App";
import Spinner from 'react-bootstrap/Spinner'


const Home = ({ children }) => {
  const [tweets, setTweets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('http://localhost:3001/tweets/index', token)
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

      {isLoading ? 
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      : <TweetLine tweets={tweets} />}
    </>
  )
}

export default Home