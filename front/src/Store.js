import { configureStore } from '@reduxjs/toolkit'
import tweetsReducer from './reducer/tweetsSlice'
import userReducer from './reducer/userSlice'
import currentUserReducer from './reducer/currentUserSlice'

const Store =  configureStore({
  reducer:{
    tweets: tweetsReducer,
    user: userReducer,
    currentUser: currentUserReducer
  }
})

export default Store