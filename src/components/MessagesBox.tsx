import React, { useContext } from 'react'
import ChatContext from '../context/ChatContext'
import AddMessage from './AddMessage'
import HeaderMessagesBox from './HeaderMessagesBox'
import ListMessage from './ListMessage'

const MessagesBox = () => {
  const {state:{activeContactData}} = useContext(ChatContext)
  console.log("active contact data: ", activeContactData)

  return (
    <section className={`flex-grow hidden md:block overflow-y-hidden`}>
      <HeaderMessagesBox/>
      <ListMessage/>
      <AddMessage/>
    </section>
  )
}

export default MessagesBox