import { RootState } from './../redux/store';
import React from "react"
import { AppDispatch } from "../redux/store"

//--------------------------------------------COMPONENT-------------------------------------------------//

//------layouts/Page.tsx------//
export interface TPageProps {
    children : React.ReactNode
}
//-----layouts/Modal.tsx---------//
export interface TModalProps {
    children : React.ReactNode
}
//-----atoms/Avatar.tsx------//
export interface TAvatarProps {
    url : string 
    sizeType: string
    online? : boolean | undefined
    handleOnClickImage? : ()=>void
}
//-----atoms/SumContactInfo.tsx-----//
export interface TSumContactInfoProps {
    image  : string
    username : string
    info : string
    type : string
    handleOnClickImage? : ()=>void
} 
//-----atoms/Icon.tsx-----//
export interface TIconProps{
    icon: JSX.Element
    handleOnClickIcon: ()=>void
    type?: string
}
//------atoms/Contact.tsx-----//
export interface TContactPorps{
    username : string,
    image : string,
    lastMessage :{
        text : string
        createdAt: string
    },
    countNotif : number
}
//-----atoms/Message.tsx-----//
export interface TMessageProps{
    idReceiver: string
    idSender :  string
    text : string
    createdAt : string
    read : boolean
}
//---atoms/ProfileInfo.tsx-----//
export interface TProfileInfoProps{
    value : string | null
    label : string
}
//---atoms/Input.tsx-----//
export interface TInputProps{
    name: string
    label: string
    type: string
    pattern: string
    error: string
    value: string
    handleOnChange : (e:React.ChangeEvent<HTMLInputElement>)=>void
}


//-------------------------------------------------------DATA------------------------------------------------------//
export interface TIconMenuSidebarData{
    name : string
    active : JSX.Element
    inActive :JSX.Element
} 

export interface TIconHeaderMessagesBox{
    name : string
    icon : JSX.Element
    onClick : ()=>void
}

export interface TFormAuth{
    username : string
    fullname : string
    password : string
}
export interface TUserData {
    id : string
    fullname : string
    username : string
    image : string
    info : string | null
    status : "online" | "offline"
    createdAt? : string
    updatedAt? : string
}

export interface TContactData extends TUserData{
    lastMessage : {
        text : string
        createdAt : string
    }
    countNotif : number
}

export interface TMessageData{
    id : string
    idSender : string
    idReceiver :string
    idGroup? : string | null
    read : boolean
    day : string
    text : string
    image? : string | null
    voice? : string | null
    createdAt : string
    updatedAt? : string
}


//-----------------------------------------Typescript for chat context (ChatContext.tsx)---------------------------//
export interface IChatContextState{ 
    state: TChatState
    dispatch: React.Dispatch<TActionChat>
}

export interface IChatContextProvider {
    children : React.ReactNode
}

export interface TChatState {
    idUser : number
    activeContactData : TContactData | null
    messages : [] | TMessageData[]
    contacts : [] | TContactData[]
    modalContactInfo : boolean
} 
export enum TypeAction {
    SET_MODAL_CONTACT_INFO = "SET_MODAL_CONTACT_INFO",
    SET_ACTIVE_CONTACT_DATA = "SET_ACTIVE_CONTACT_DATA",
    SET_MESSAGES = "SET_MESSAGES",
    SET_CONTACTS = "SET_CONTACTS",
}

export type TActionChat = 
| {type: "SET_ACTIVE_CONTACT_DATA" ; payload : TContactData | null}
| {type: "SET_CONTACTS"; payload : []|TContactData[]}
| {type: "SET_MESSAGES"; payload : []|TMessageData[]}
| {type: "SET_MODAL_CONTACT_INFO"; payload: boolean}

//---------------------------------Type Redux toolkit------------------------------//
export interface TThunkApi{
    dispatch : AppDispatch
    state : RootState
}
//--------------------------------------Alert toastify------------------------------

export interface TTostifyConfig{
    position: string
    autoClose:number
    hideProgressBar: boolean
    closeOnClick:boolean
    pauseOnHover: boolean
    draggable: boolean
    progress: undefined | boolean
  }
