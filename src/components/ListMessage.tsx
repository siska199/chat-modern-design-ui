import {useEffect, useContext, useRef} from "react"
import Message from '../atoms/Message'
import ChatContext from '../context/ChatContext'

const ListMessage = () => {
  const containerMsgRef = useRef<HTMLDivElement | null>(null)
  const {state:{messages}} = useContext(ChatContext)

  useEffect(()=>{
    containerMsgRef.current && scrollToBottom()
  },[messages])
  
  const scrollToBottom = ()=>{
    containerMsgRef?.current?.scroll({
      top : containerMsgRef?.current?.scrollHeight,
      left:0
    })
  }

  return (
    <div ref={containerMsgRef} className='pt-7 pb-10 px-7 flex flex-col overflow-y-scroll overflow-x-hidden h-[calc(100%-10rem)] gap-[2.5em] bg-cd900'>
      {
        messages.map((data,i)=>(
          <Message key={i} {...data}/>
        ))
      }
    </div>
  )
}

export default ListMessage