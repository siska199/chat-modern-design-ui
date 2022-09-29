import { setAuthToken } from './../../lib/apiConfig';
import { TFormAuth, TUserData, } from './../../lib/types';
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
    localStorage.setItem("token", res.data.data.token);
    setAuthToken(res.data.data.token)
    return{
        user : res.data.data,
        error : null
    }
} catch (error : any) {
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
        localStorage.setItem("token", res.data.data.token);
        setAuthToken(res.data.data.token)
        return{
            user : res.data.data,
            error : null
        }
    } catch (error : any) {
        return {
            error : error.response.data.message,
            user : null
        }
    }
})


const handleGetProfileData = createAsyncThunk<TPayloadAuth,void,{}>("auths/profileData", async()=>{
    try {
        setAuthToken(localStorage.getItem('token') as string)
        const dataUser = await API.get(API_ENDPOINTS.USER);
        return {
          user: dataUser.data.data,
          error : null
        };
    } catch (error : any) {
        return {
            user : null,
            error: error.response.data.message,
          };
    }
})

const handleLogout = createAsyncThunk<{},undefined,{}>("profile/Logout", async () => {
    try {
      await API.get(API_ENDPOINTS.LOGOUT);
      localStorage.removeItem("token");
      return null
    } catch (error:any) {
      return {
        error: error.response.data.message,
      };
    }
  });

export enum TKeyFormUpdateProfile {
    USERNAME = "username",
    FULLNAME = "fullname",
    INFO = "info"
}
export type TFormUpdateProfile = {[key:string]:string}

const handleUpdateProfile = createAsyncThunk<{},TFormUpdateProfile,{}>(
    "profile/updateProfile",
    async (form) => {
      try {
        await API.patch(API_ENDPOINTS.USER, form, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return {};
      } catch (error:any) {
        return {
          error: error.response.data.message,
        };
      }
    }
  );


const authSlice = createSlice({
    name : "auths",
    initialState,
    reducers : {
        handleModalProfile : (state, action)=>{
            state.modalProfile = action.payload
        }
    },
    extraReducers :(builder)=> {
        //-----
        builder.addCase(handleLogin.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(handleLogin.fulfilled,(state,action)=>{
            state.error = action.payload.error
            state.user = action.payload.user
            state.loading = false  
        })
        builder.addCase(handleLogin.rejected,(state,action)=>{
            state.loading = false
        })
        //----------
        builder.addCase(handleRegister.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(handleRegister.fulfilled,(state,action)=>{
            state.error = action.payload.error
            state.user = action.payload.user
            state.loading = false  
        })
        builder.addCase(handleRegister.rejected,(state,action)=>{
            state.loading = false
        })
        //--------
        builder.addCase(handleGetProfileData.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(handleGetProfileData.fulfilled,(state,action)=>{
            state.error = action.payload.error
            state.user = action.payload.user
            state.loading = false  
        })
        builder.addCase(handleGetProfileData.rejected,(state,action)=>{
            state.loading = false
        })
        //---------
        builder.addCase(handleLogout.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(handleLogout.fulfilled,(state,action)=>{
            state.error = null
            state.user = null
            state.loading = false  
        })
        builder.addCase(handleLogout.rejected,(state,action)=>{
            state.loading = false
        })
        //-----------------
        builder.addCase(handleUpdateProfile.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(handleUpdateProfile.fulfilled,(state,action)=>{
            state.loading = false  
        })
        builder.addCase(handleUpdateProfile.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default authSlice.reducer
export const {handleModalProfile} = authSlice.actions
export {handleLogin, handleRegister,handleGetProfileData,handleLogout, handleUpdateProfile}
