import React from 'react'
import { getFormatDate } from '../lib/helperFunction'
import {TMessageData } from '../lib/types'
import { useAppSelector } from '../redux/store'

const Message:React.FC<TMessageData> = (props) => {
  const id = useAppSelector(state=>state.auths.user?.id)
  const {idSender,text, createdAt, read} = props
  const sender = id===idSender?true:false

  const stylesReadIndikator = `w-3 h-3 rounded-full ${read?"bg-sky-800":"bg-white"} `
  return (
    <div className={`${sender&&"justify-end"} flex`}>
      <div className='tracking-wide leading-6 max-w-[22rem] relative'>
        <p className={` rounded-xl   ${sender?"bg-main rounded-tr-none ":"rounded-tl-none bg-cd800"} p-3 text-sm font-thin`}>{text}</p>
        <div className={`absolute -bottom-7  w-full  ${sender?"justify-left flex items-center":"text-right"} text-cd500 text-[0.8rem]`}>
          {sender &&
          <div className='flex gap-1 mr-2'>
              <div className={stylesReadIndikator}></div>          
              <div className={stylesReadIndikator}></div>
          </div> 
          }
          {getFormatDate(createdAt)}
        </div>
      </div>
    </div>
  )
}

export default Message