import React from 'react'
import AddMessage from './AddMessage'
import HeaderMessagesBox from './HeaderMessagesBox'
import ListMessage from './ListMessage'

const MessagesBox = () => {
  return (
    <section className='flex-grow overflow-y-scroll'>
      <HeaderMessagesBox/>
      <ListMessage/>
      <AddMessage/>
    </section>
  )
}

export default MessagesBox