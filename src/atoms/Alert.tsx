import React from 'react'
import { TAlertProps } from '../lib/types'

const Alert:React.FC<TAlertProps> = ({type, message}) => {
    let style =""
    switch(type){
        case "error":
            style="border-rose-900 border-[0.005rem] bg-rose-300"
            break;
        case "succes":
            break;
        case "warning":
            break;
        default:
            break;
    }
    console.log("type",type)
  return (
    <div className={`absolute top-10 right-10 rounded-md text-black  ${style} p-2`}>
        <p>
            <span className='mr-3'>
                {type==="error"&&"🚫"}
            </span>
            {message}
        </p>
    </div>
  )
}

export default Alert