import { useAppSelector } from "../redux/store";
import React, { createContext, useReducer } from "react";
import { IChatContextProvider, IChatContextState, TActionChat, TChatState, TypeAction } from "../lib/types";
import SOCKET_EVENTS from "../lib/socketEvents";
import {io} from "socket.io-client"
const initialState : TChatState = {
    idUser : 1,
    activeContactData : null,
    messages : [],
    contacts : [],
    modalContactInfo : false
}
const defaultDispatch : React.Dispatch<TActionChat> = () => initialState
const ChatContext = createContext<IChatContextState>({
    state : initialState,
    dispatch : defaultDispatch
})


const reducer = (state :TChatState,action:TActionChat) : TChatState=>{
    switch(action.type){
        case TypeAction.SET_CONTACTS:
            state = {...state, contacts: action.payload}
            return state
        case TypeAction.SET_ACTIVE_CONTACT_DATA:
            return {...state, activeContactData : action.payload}
        case TypeAction.SET_MODAL_CONTACT_INFO : 
            console.log(action.payload)
            return {...state, modalContactInfo : action.payload}
        case  TypeAction.SET_MESSAGES:
            return {...state, messages : action.payload}
        default:
            return {...state}
    }
}

export const ChatContextProvider : React.FC<IChatContextProvider> = ({children})=>{
    const [state, dispatch] = useReducer<React.Reducer<TChatState,TActionChat>>(reducer, initialState)
    const user = useAppSelector(state=>state.auths.user)
    const socket = io(process.env.REACT_BEURL as string,{
        auth : {
            token : user?.token || localStorage.getItem("token")
        }
    })

    return(
        <ChatContext.Provider value={{state, dispatch,}}>
            {children}
        </ChatContext.Provider>
    )
}


export default ChatContext