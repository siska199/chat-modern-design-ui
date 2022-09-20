import React from 'react'
import Contact from '../atoms/Contact'
import { contacts } from '../lib/data'
const ListContact = () => {
  return (
    <div className=''>
      <h1 className='px-3 font-medium mb-4 '>Messages</h1>
      <div>
        {
          contacts.map((data,i)=>(
            <Contact key={i} username={data.username} image={data.image} lastMessage={data.lastMessage} countNotif={data.countNotif}/>
          ))
        }
      </div>
    </div>
  )
}

export default ListContact