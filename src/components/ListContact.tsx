import {useEffect, useContext} from "react"
import Contact from '../atoms/Contact'
import ChatContext from "../context/ChatContext"
import SOCKET_EVENTS from "../lib/socketEvents"
import { useAppSelector } from "../redux/store"

const ListContact = () => {
  const id = useAppSelector(state=>state.auths.user?.id)
  const {socket, state: {contacts}} = useContext(ChatContext)
  useEffect(()=>{
    socket?.emit(SOCKET_EVENTS.LOAD_CONTACTS,id)
  },[])

  const handleContactActive= (idContact:string)=>{
    socket?.emit(SOCKET_EVENTS.LOAD_ACTIVE_CONTACT,idContact)
    socket?.emit(SOCKET_EVENTS.LOAD_MESSAGES,idContact)
  }
  console.log("data contacts be: ", contacts)
  return (
    <div className='h-full overflow-y-scroll scrollbar-hidden'>
      <h1 className='px-3 font-medium pb-4 sticky top-0 bg-cd800 z-[20] '>Messages</h1>
      <div>
        {
          contacts?.map((data,i)=>(
            <Contact handleContactActive={handleContactActive} key={i} {...data}/>
          ))
        }
      </div>
    </div>
  )
}

export default ListContact