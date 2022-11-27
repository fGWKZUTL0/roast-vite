import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios"

const App = () => {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    async function getTweets() {
      let tweetsApi = await axios.get(`/tweets/index`)
      console.log(tweetsApi)

      setTweets(tweetsApi.data)
    }

    getTweets()
    console.log(tweetsApi.data)
  }, [])

}

export default App
