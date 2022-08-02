
import { createSlice } from '@reduxjs/toolkit'
import { 
     loginAction, logoutAction 
} from '../actions/user';


//기본 state 
export const initialState = {
    loginCheck: false,
    user: 'null',
    tableData : '',
};

const userSlice = createSlice({
    
    name: 'user',
    initialState,
    reducers: {
        //동기


    },
    extraReducers: (builder) => builder

        //비동기

        //login
        //pending state 변경 전
        .addCase(loginAction.pending, (state) => {
            state.loginCheck = false
        })
        //pending state 변경 후
        .addCase(loginAction.fulfilled, (state, action) => {
            console.log('reducer')
            state.loginCheck = true
            state.user = action.payload
        })
        //pending state 변경 실패
        .addCase(loginAction.rejected, (state, action) => {
            state.loginCheck = false
        })
        


        .addCase(logoutAction.fulfilled, (state, action) => {
            state.loginCheck = false
        })


    .addDefaultCase((state) => state)
})






export default userSlice