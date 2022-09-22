import React from "react"

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
} 
enum TypeAction {
    SET_ACTIVE_CONTACT_DATA = "SET_ACTIVE_CONTACT_DATA",
    SET_MESSAGES = "SET_MESSAGES",
    SET_CONTACTS = "SET_CONTACTS"
}

export type TActionChat = 
| {type: TypeAction.SET_ACTIVE_CONTACT_DATA ; payload : TContactData | null}
| {type: TypeAction.SET_CONTACTS; payload : []|TContactData[]}
| {type: TypeAction.SET_MESSAGES; payload : []|TMessageData[]}

