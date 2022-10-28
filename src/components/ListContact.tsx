import {useContext, useEffect, useRef} from "react"
import Contact from '../atoms/Contact'
import Empty from "../atoms/Empty"
import ChatContext from "../context/ChatContext"
import SOCKET_EVENTS from "../lib/socketEvents"

const ListContact = () => {
  const containerContactsRef= useRef<HTMLDivElement>(document.createElement('div')) 
  const {socket, state: {contacts,}} = useContext(ChatContext)

  useEffect(()=>{
    // containerContactsRef.current && containerContactsRef.current.scroll({top: 0, behavior: 'smooth'});
  },[contacts,])

  const handleContactActive= (idContact:string)=>{
    socket?.emit(SOCKET_EVENTS.LOAD_ACTIVE_CONTACT,idContact)
    socket?.emit(SOCKET_EVENTS.LOAD_MESSAGES,{idReceiver : idContact, loadContacts: true})
  }
  
  return (
    <div className='h-full overflow-y-scroll scrollbar-hidden' ref={containerContactsRef} >
      <h1 className='px-3 font-medium pb-4 sticky top-0 bg-cd800 z-[20] '>Messages</h1>
      <div className="">
        {
          contacts.length>0 ? contacts?.map((data,i)=>(
            <Contact handleContactActive={handleContactActive} key={i} {...data}/>
          )):(
            <Empty messages="You Dont Have Contact Friends 🙅‍♀️"/>
          )
        }
      </div>
    </div>
  )
}

export default ListContact