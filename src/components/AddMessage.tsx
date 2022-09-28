import React, {useState} from "react"
import {useContext} from "react"
import {RiBearSmileLine} from "react-icons/ri"
import {HiOutlinePaperClip} from "react-icons/hi"
import {RiMicFill} from "react-icons/ri"
import Icon from "../atoms/Icon"
import ChatContext from "../context/ChatContext"
import { useAppSelector } from "../redux/store"
import SOCKET_EVENTS from "../lib/socketEvents"

const AddMessage = () => {
  const idSender = useAppSelector(state=>state.auths.user?.id)
  const {socket, state:{activeContactData}} = useContext(ChatContext)
  const [value, setValue] = useState("")
  const handleSubmitMessage = (e:React.KeyboardEvent<HTMLInputElement>)=>{

    if(e.code==="Enter" && value!==""){
      const form = {
        idSender : idSender,
        idReceiver : activeContactData?.id,
        text:value
      }
      console.log("form add message",form)
      socket?.emit(SOCKET_EVENTS.SEND_MESSAGE,form)
      setValue("")
    }
  }
  return (
    <div className='bg-cd800 sticky bottom-0 px-3 flex justify-center items-center gap-1 py-4'>
      <Icon icon={<HiOutlinePaperClip/>} handleOnClickIcon={()=>console.log("icon")} />
      <div className='w-[80%]  flex mx-3 gap-3 items-center rounded-lg border-[0.005rem] bg-cd700 border-cd600 px-3'>
          <input value={value} onChange={(e)=>setValue(e.target.value)} onKeyDown={(e)=>handleSubmitMessage(e)} className='w-full  bg-transparent font-thin text-sm placeholder:font-thin placeholder:text-sm outline-none' placeholder='Send message...'/>
          <Icon icon={<RiBearSmileLine/>} handleOnClickIcon={()=>console.log("icon")} />
      </div>
      <Icon icon={<RiMicFill/>} handleOnClickIcon={()=>console.log("icon")} />
    </div>
  )
}

export default AddMessage