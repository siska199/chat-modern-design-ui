import Message from '../atoms/Message'
import { messages } from '../lib/data'

const ListMessage = () => {
  return (
    <div className='pt-7 pb-10 px-7 flex flex-col overflow-y-scroll h-[calc(100%-10rem)] gap-[2.5em] bg-cd900'>
      {
        messages.map((data,i)=>(
          <Message key={i} idSender={data.idSender} idReceiver={data.idReceiver} text={data.text} createdAt={data.createdAt} read={data.read}/>
        ))
      }
    </div>
  )
}

export default ListMessage