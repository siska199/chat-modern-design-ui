import { useContext } from 'react'
import ChatContext from '../context/ChatContext'
import AddMessage from './AddMessage'
import HeaderMessagesBox from './HeaderMessagesBox'
import ListMessage from './ListMessage'
import imgWelcome from "../assets/bg.png"

const MessagesBox = () => {
  const {state:{activeContactData}} = useContext(ChatContext)

  return (
    <section className={`flex-grow  ${activeContactData?"!block":"md:!flex md:flex-col"} hidden md:block overflow-y-hidden`}>
      {
        activeContactData?(
          <>
              <HeaderMessagesBox/>
              <div className='relative h-full'>
                <ListMessage/>
                <AddMessage/>
              </div>
          </>
          ):(
            <div className='m-auto'>
              <h1 className='text-center font-thin text-[1.5rem] lg:text-[2.5rem]'>Buil Your Connection With <br/> Chat Hello 199</h1>
              <img src={imgWelcome} className=" m-auto w-[10rem] md:w-[30rem]" alt=""/>
            </div>
            )
          }
    </section>
  )
}

export default MessagesBox