import React from 'react'
import { user } from '../lib/data'
import { MessageProps } from '../lib/propsType'

const Message:React.FC<MessageProps> = (props) => {
  const {id} = user
  const {idSender,idReceiver,text, createdAt} = props

  const sender = id===idSender?true:false
  console.log("sender: ", sender)
  const stylesReadIndikator = `w-3 h-3 rounded-full bg-sky-800`
  return (
    <div className={`${sender&&"justify-end"} flex`}>
      <div className='tracking-wide leading-6 max-w-[22rem] relative'>
        <p className={` rounded-xl   ${sender?"bg-[#4e9dff] rounded-tr-none ":"rounded-tl-none bg-cd800"} p-3 text-sm font-thin`}>{text}</p>
        <div className={`absolute -bottom-7  w-full  ${sender?"justify-left flex items-center":"text-right"} text-cd500 text-[0.8rem]`}>
          {sender &&
          <div className='flex gap-1 mr-2'>
              <div className={stylesReadIndikator}></div>          
              <div className={stylesReadIndikator}></div>
          </div> 
          }
          {createdAt}
        </div>
      </div>
    </div>
  )
}

export default Message