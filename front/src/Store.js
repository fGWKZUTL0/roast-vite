import { configureStore } from '@reduxjs/toolkit'
import tweetsReducer from './reducer/tweetsSlice'
import userReducer from './reducer/userSlice'

const Store =  configureStore({
  reducer:{
    tweets: tweetsReducer,
    user: userReducer
  }
})

export default Store