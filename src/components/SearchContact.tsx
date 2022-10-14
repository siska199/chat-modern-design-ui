import React, { useContext, useRef, useState } from "react"
import {BsSearch} from "react-icons/bs"
import ChatContext from "../context/ChatContext"
import SOCKET_EVENTS from "../lib/socketEvents"
import { TypeAction } from "../lib/types"
import { useAppSelector } from "../redux/store"
import {IoCloseOutline} from "react-icons/io5"

const SearchContact = () => {
  const user = useAppSelector(state=>state.auths.user)
  const {socket, state:{queryUsers}, dispatch} = useContext(ChatContext)

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    try {
      const form = {idUser: user?.id, query: e.target.value}
      dispatch({
        type : TypeAction.SET_QUERY_USERS,
        payload : e.target.value
      })
      setTimeout(()=>{
        socket?.emit(SOCKET_EVENTS.LOAD_CONTACTS,form)
      },1000)
    } catch (error:any) {
      throw new Error(error.message)
    }
  }

  return (
    <div className='bg-cd800 '>
      <div className='my-5  flex mx-3 p-3 gap-3 items-center rounded-lg border-[0.005rem] bg-cd700 border-cd600'>
          {queryUsers?(
            <IoCloseOutline className="cursor cursor-pointer text-[1.1rem]" onClick={()=>dispatch({
              type : TypeAction.SET_QUERY_USERS,
              payload : ""
            })}/>
          ):(
            <BsSearch />
          )}
          <input value={queryUsers} onChange={(e)=>handleOnChange(e)} className='bg-transparent w-full font-thin text-sm placeholder:font-thin placeholder:text-sm outline-none' placeholder='Search or start new chat...'/>
      </div>
    </div>
  )
}

export default SearchContact