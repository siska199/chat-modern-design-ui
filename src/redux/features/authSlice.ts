import { TFormAuth, TUserData, TThunkApi } from './../../lib/types';
import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import API from '../../lib/apiConfig';
import API_ENDPOINTS from '../../lib/apiEndpoints';

export interface TAuthState{
    user : TUserData | null
    modalProfile : boolean
    loading : boolean
    error : string | null
}
export interface TPayloadAuth {
    user : TUserData | null
    error: string | null
}

const initialState : TAuthState ={
    user : null,
    modalProfile : false,
    loading : false,
    error : null
}

/*
    typescript:
    createAsyncThunk<output, input, thunkAPI>
*/

const handleLogin = createAsyncThunk<TPayloadAuth,TFormAuth,{}>("auths/login",async(data)=>{
try {    
    const form = {
        username : data.username,
        password : data.password
       }
    const res = await API.post(API_ENDPOINTS.LOGIN,form,{
    headers : {
        "Content-Type":"application/json"
    }
    })
    console.log("res: ",res)
    return{
        user : res.data.data,
        error : null
    }
} catch (error : any) {
    console.log(error.response.data.message)
    return {
        error : error.response.data.message,
        user : null
    }
}
})

const handleRegister = createAsyncThunk<TPayloadAuth,TFormAuth,{}>("auths/register", async(data)=>{
    try {    
        const form = data
        const res = await API.post(API_ENDPOINTS.REGISTER,form,{
        headers : {
            "Content-Type":"application/json"
        }
        })
        console.log("res: ",res)
        return{
            user : res.data.data,
            error : null
        }
    } catch (error : any) {
        console.log(error.response.data.message)
        return {
            error : error.response.data.message,
            user : null
        }
    }
})

const authSlice = createSlice({
    name : "auths",
    initialState,
    reducers : {

    },
    extraReducers :(builder)=> {
        builder.addCase(handleLogin.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(handleLogin.fulfilled,(state,action:PayloadAction<TPayloadAuth>)=>{
            state.error = action.payload.error
            state.user = action.payload.user
            state.loading = false  
        })
        builder.addCase(handleLogin.rejected,(state,action)=>{
            state.loading = false
        })

        builder.addCase(handleRegister.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(handleRegister.fulfilled,(state,action:PayloadAction<TPayloadAuth>)=>{
            state.error = action.payload.error
            state.user = action.payload.user
            state.loading = false  
        })
        builder.addCase(handleRegister.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default authSlice.reducer
export {handleLogin, handleRegister}
