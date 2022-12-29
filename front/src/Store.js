import { configureStore } from '@reduxjs/toolkit'
import tweetsReducer from './reducer/tweetsSlice'

const Store =  configureStore({
  reducer:{
    tweets: tweetsReducer
  }
})

export default Store