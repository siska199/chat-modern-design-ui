import {useContext} from "react"
import ChatContext from '../context/ChatContext'
import { formatDateForSumContactInfo, } from "../lib/helperFunction"
import { TContactData } from '../lib/types'
import SumContactInfo from './SumContactInfo'


const Contact: React.FC<TContactData & {handleContactActive:(id:string)=>void}> = (props) => {
  const {state:{activeContactData}} = useContext(ChatContext)
  const {username, image, lastMessage, notif,status, handleContactActive, id} = props
  return (
    <div onClick={()=>handleContactActive(id)} className={`${activeContactData?.id===id&&"bg-cd700"} p-3 flex justify-between hover:bg-cd700 cursor-pointer max-h-[6rem] gap-2`}>
      <SumContactInfo type="contact" username={username} status={status} image={image} info={lastMessage ? lastMessage?.text:"Click to send messsage"}/>
      <div className='flex flex-col gap-2 justify-center '>
        {
          lastMessage&&(
            <>
              <span className='text-[0.6rem] text-cd500 w-[5rem]'>{formatDateForSumContactInfo(lastMessage.createdAt)}</span>
              {
                notif!==0&&(
                  <span className='text-center text-[0.7rem] bg-main w-4 h-4 m-auto rounded-full'>{notif}</span>
                )
              }
            </>
          )
        }
      </div>
    </div>
  )
}

export default Contact