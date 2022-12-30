import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value:[]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUser(state, action){
            state.value = action.payload
        },
        resetUser(state, action) {
            state.value = []
        }
    },
})
export const { initUser, resetUser } = userSlice.actions
export const selectUser = (state) => state.user.value
export default userSlice.reducer