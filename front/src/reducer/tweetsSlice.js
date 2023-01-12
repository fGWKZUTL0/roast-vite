import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: [],
}

export const tweetsSlice = createSlice({
    name: 'tweets',
    initialState,
    reducers: {
        initTweets(state, action){
            state.value = action.payload
        },
        addTweets(state, action) {
            state.value.push(action.payload[0])
        },
        deleteTweets(state, action) {
            state.value = state.value.filter(tweet => tweet.id !== action.payload.id)
        },
        resetTweets(state, action) {
            state.value = []
        }
    },
})
export const { initTweets, addTweets, deleteTweets, resetTweets } = tweetsSlice.actions
export const selectTweets = (state) => state.tweets.value
export default tweetsSlice.reducer