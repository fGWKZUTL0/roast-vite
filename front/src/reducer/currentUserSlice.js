import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value:[]
}

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        initCurrentuser(state, action){
            state.value = action.payload
        },
        resetCurrentuser(state, action) {
            state.value = []
        }
    },
})
export const { initCurrentuser, resetCurrentuser } = currentUserSlice.actions
export const selectCurrentuser = (state) => state.currentUser.value
export default currentUserSlice.reducer