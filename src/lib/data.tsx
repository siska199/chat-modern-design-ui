import {RiMessage2Fill,RiMessage2Line} from "react-icons/ri"
import {BsTelephone, BsTelephoneFill,BsBookmarkFill,BsBookmark,BsPeopleFill, BsPeople} from "react-icons/bs"
import {AiTwotoneVideoCamera,AiOutlineVideoCamera,AiOutlineSetting,AiTwotoneSetting} from "react-icons/ai"
import {BiDotsVerticalRounded} from "react-icons/bi"
import { TContactData, TIconMenuSidebarData, TMessageData, TUserData,TIconHeaderMessagesBox } from "./types"

export const contactsAvatar = [
    "https://i.pinimg.com/564x/6d/8d/27/6d8d2772839d339ced26deebab2632aa.jpg",
    "https://i.pinimg.com/564x/50/40/00/504000bbc3e9e26dcaa7b329c711be7a.jpg",
    "https://i.pinimg.com/736x/49/6e/28/496e28c92f9a515b9313ef950fafa927.jpg",
    "https://i.pinimg.com/564x/36/58/77/365877f3595b0630f7a68a2c4eff7e17.jpg",
    "https://i.pinimg.com/564x/ed/b8/e2/edb8e2a21448c290c1cc497917d2c120.jpg",
    "https://i.pinimg.com/564x/85/a8/db/85a8db001f1cb22f2f160bfaea548a2f.jpg",
    "https://i.pinimg.com/564x/3a/49/28/3a49289dafbfdf1ce0c74fdea03241e4.jpg",
    "https://i.pinimg.com/564x/9d/0d/99/9d0d99bdfa081acf06cfa31528263661.jpg",
    "https://i.pinimg.com/564x/29/07/f7/2907f7bb2bd4b0381b40c46fefda1728.jpg",
    "https://i.pinimg.com/564x/59/e1/79/59e179bb27578b114344fd2b3cdd35ee.jpg",
]

export const iconsMenuSidebar : TIconMenuSidebarData[]  = [
    {
        name : "messages",
        active : <RiMessage2Fill/>,
        inActive : <RiMessage2Line/>
    },
    {
        name : "contacts",
        active : <BsPeopleFill/>,
        inActive : <BsPeople/>
    },
    {
        name : "telephones",
        active : <BsTelephoneFill/>,
        inActive : <BsTelephone/>,
    },{
        name : "videos",
        active : <AiTwotoneVideoCamera/>,
        inActive : <AiOutlineVideoCamera/>
    },{
        name : "bookmarks",
        active : <BsBookmarkFill/>,
        inActive : <BsBookmark/>
    },{
        name : "settings",
        active : <AiTwotoneSetting/>,
        inActive : <AiOutlineSetting/>
    }

]

export const iconsHeaderMessagesBox : TIconHeaderMessagesBox[] = [
    {
        name : "telephones",
        icon : <BsTelephone/>,
        onClick : ()=>console.log("click icon telephones")
    },{
        name : "videos",
        icon : <AiOutlineVideoCamera/>,
        onClick : ()=>console.log("click icon videos")
    },{
        name : "menu",
        icon : <BiDotsVerticalRounded/>,
        onClick : ()=>console.log("click icon menu")
    },
]

//--------------------------------DATA PROCESSED-----------------------------

export const user : TUserData = {
    id :'1',
    fullname : "Siska Apriana rifianti",
    username : "siska199",
    image : "https://i.pinimg.com/736x/58/1b/7a/581b7aabc75e966e846034df4752514e.jpg",
    status : "online",
    info : "Allah nomer sate di dalam hidupku",
    createdAt : "",
    updatedAt : ""
}

export const contactActive : TUserData = {
    id : '1',
    image : "https://i.pinimg.com/564x/4f/62/06/4f620697392a53027a2af2ba1be0717f.jpg",
    username : "User1",
    fullname : "siska apriana rifianti",
    info : "Hamba Allah tuhan seluruh alam",
    status : "online",
    createdAt : "",
    updatedAt : ""
}

export const contacts : TContactData[] = [
    ...Array(10)
].map((_,i)=>({
    id : `${i}`,
    fullname : `fullname${i}`,
    info : '',
    username : `usernam${i}`,
    image : `https://i.pinimg.com/564x/4f/62/06/4f620697392a53027a2af2ba1be0717f.jpg`,
    lastMessage :{
        text : "loprem ipsum hoho hihihi",
        createdAt: "12:00 PM"
    },
    status : "offline",
    notif : 4,
}))

export const messages:TMessageData[] = [
    ...Array(20)
].map((_,i)=>({
    id : '1',
    idReceiver: i%2? '1' : '2',
    idSender :  i%2? '2' : '1',
    text : i%2? 'lorem ipsum hoho hihi jangan menyerah': 'Oke Hoho Hihihi lala lili mama mimi djkbiwa jhbjhvd kbdvh kjhbdva ifbevhi fdiuvhiesua biufbeviujfbviusd ifdhbvi fvb',
    createdAt : i%2 ? "12:00 PM":"10:00 AM",
    read : i===0?false:true,
    day : "Sunday",
}))

export const inputsFormAuth = [
    {
      name: "fullname",
      label: "Fullname",
      type: "text",
      pattern: "^([a-zA-Z]+[ ]{0,1})+$",
      error: "Fullame should only contain alphaphet",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      pattern: "^[a-z0-9]{3,10}$",
      error:
        "Username should be 3-10 characters and should't contain uppercase letter",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      error:
        "Password should be 8-20 characters and includes at least contain 1 lowercase, 1 uppercase, 1 numeric, and 1 special character",
    },
  ];

export const dataDropdownSidebarContacts= [
    {
        name :"Group baru",
        
    },{
        name :"Pesan berbintang",
    },{
        name :"Setelan",
    },{
        name :"Keluar",
    }

];
