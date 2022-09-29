import { useAppSelector } from "../redux/store";
import React, { createContext, useEffect, useReducer } from "react";
import { IChatContextProvider, IChatContextState, TActionChat, TChatState, TypeAction } from "../lib/types";
import SOCKET_EVENTS from "../lib/socketEvents";
import {io, Socket} from "socket.io-client"

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
    dispatch : defaultDispatch,
    socket : null
})


const reducer = (state :TChatState,action:TActionChat) : TChatState=>{
    switch(action.type){
        case TypeAction.SET_CONTACTS:
            state = {...state, contacts: action.payload}
            return state
        case TypeAction.SET_ACTIVE_CONTACT_DATA:
            return {...state, activeContactData : action.payload}
        case TypeAction.SET_MODAL_CONTACT_INFO : 
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
    const socket:Socket= io(process.env.REACT_APP_BEURL as string,{
        auth : {
            token : user?.token || localStorage.getItem("token")
        }
    })

    useEffect(()=>{
        console.log("user changes:", socket)
        socket.emit(SOCKET_EVENTS.USER_IN_OUT)
    },[user])

    socket.off(SOCKET_EVENTS.CONTACTS).on(SOCKET_EVENTS.CONTACTS,(dataContacts)=>{
        dispatch({
            type : TypeAction.SET_CONTACTS,
            payload: dataContacts
        })
    })
    socket.off(SOCKET_EVENTS.ACTIVE_CONTACT).on(SOCKET_EVENTS.ACTIVE_CONTACT,(dataActiveContact)=>{
        dispatch({
            type:TypeAction.SET_ACTIVE_CONTACT_DATA,
            payload:dataActiveContact
        })
    })
    socket.off(SOCKET_EVENTS.MESSAGES).on(SOCKET_EVENTS.MESSAGES,(dataMessages)=>{
        console.log("get messages: ", dataMessages)
        dispatch({
            type:TypeAction.SET_MESSAGES,
            payload : dataMessages
        })
    })
    socket
    .off(SOCKET_EVENTS.NEW_MESSAGE)
    .on(SOCKET_EVENTS.NEW_MESSAGE, (idReceiver) => {
      socket.emit(SOCKET_EVENTS.LOAD_MESSAGES, idReceiver);
    });
  socket.off(SOCKET_EVENTS.RELOAD_CONTACTS).on(SOCKET_EVENTS.RELOAD_CONTACTS, () => {
    socket.emit(SOCKET_EVENTS.LOAD_CONTACTS, user?.id);
  });

    return(
        <ChatContext.Provider value={{state, dispatch, socket}}>
            {children}
        </ChatContext.Provider>
    )
}


export default ChatContext