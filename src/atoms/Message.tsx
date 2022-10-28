import React from 'react'
import { getFormatTime } from '../lib/helperFunction'
import {TMessageData } from '../lib/types'
import { useAppSelector } from '../redux/store'

const Message:React.FC<TMessageData> = (props) => {
  const id = useAppSelector(state=>state.auths.user?.id)
  const {idSender,text, createdAt, read, image, voice} = props
  const sender = id===idSender?true:false

  const stylesReadIndikator = `w-3 h-3 rounded-full ${read?"bg-sky-800":"bg-white"} `

  return (
    <div className={`${sender&&"justify-end"} flex relative`}>
      <div className='tracking-wide leading-6 max-w-[22rem] '>
        <p className={` rounded-xl   ${sender?"bg-main rounded-tr-none ":"rounded-tl-none bg-cd800"} p-3 text-sm font-thin`}>{text}</p>
        {image&&(
          <img src={image} className="w-[10rem] h-[10rem] mt-2" alt="" />
        )}
      </div>
      <div className={`absolute -bottom-7  ${sender?"justify-left flex items-center":"text-right"} text-cd500 text-[0.8rem]`}>
        {sender &&
        <div className='flex gap-1 mr-2'>
            <div className={stylesReadIndikator}></div>          
            <div className={stylesReadIndikator}></div>
        </div> 
        }
        <p>
        {getFormatTime(createdAt)}
        </p>
      </div>
    </div>
  )
}

export default Message