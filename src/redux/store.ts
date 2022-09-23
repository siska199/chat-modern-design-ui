import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./features/authSlice";
import {useDispatch} from "react-redux"

const store = configureStore({
    reducer : {
        auths : authSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch : ()=>AppDispatch = useDispatch

export default store