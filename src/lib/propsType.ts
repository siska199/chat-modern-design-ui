import React from "react"

export interface PageProps {
    children : React.ReactNode
}

export interface ModalProps {
    children : React.ReactNode
}

export interface IconMenuSidebarProps{
    name : string
    active : JSX.Element
    inActive :JSX.Element
} 

export interface AvatarProps {
    url : string 
    sizeType: string
    online? : boolean | undefined
    handleOnClickImage? : ()=>void
}

export interface SumContactInfoProps {
    image  : string
    username : string
    info : string
    type : string
} 

export interface IconProps{
    icon: JSX.Element
    handleOnClickIcon: ()=>void
    type?: string
}

export interface ContactPorps{
    username : string,
    image : string,
    lastMessage :{
        text : string
        createdAt: string
    },
    countNotif : number
}

export interface MessageProps{
    idReceiver: string
    idSender :  string
    text : string
    createdAt : string
    read : boolean
}

export interface ProfileInfoProps{
    value : string
    label : string
}