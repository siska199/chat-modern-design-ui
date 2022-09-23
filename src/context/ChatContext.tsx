import React, { createContext, useReducer } from "react";
import { SET_ACTIVE_CONTACT_DATA, SET_CONTACTS, SET_MESSAGES } from "../lib/reducerTypes";
import { IChatContextProvider, IChatContextState, TActionChat, TChatState } from "../lib/types";
import SOCKET_EVENTS from "../lib/socketEvents";

const ChatContext = createContext<IChatContextState|null>(null)

const initialState : TChatState = {
    idUser : 1,
    activeContactData : null,
    messages : [],
    contacts : []
}

const reducer = (state :TChatState,action:TActionChat) : TChatState=>{
    switch(action.type){
        case SET_CONTACTS:
            state = {...state, contacts: action.payload}
            return state
        case SET_ACTIVE_CONTACT_DATA:
            return {...state, activeContactData : action.payload}
        case  SET_MESSAGES:
            return {...state, messages : action.payload}
        default:
            return {...state}
    }
}

export const ChatContextProvider : React.FC<IChatContextProvider> = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <ChatContext.Provider value={{state, dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}


export default ChatContext