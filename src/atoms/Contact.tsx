import SumContactInfo from './SumContactInfo'
import { ContactPorps } from '../lib/propsType'

const Contact: React.FC<ContactPorps> = (props) => {
  const {username, image, lastMessage:{text, createdAt}, countNotif} = props
  return (
    <div className='p-3 flex justify-between hover:bg-cd700 cursor-pointer'>
      <SumContactInfo type="contact" username={username} image={image} info={text}/>
      <div className='flex flex-col gap-2 '>
        <span className='text-[0.6rem] text-cd500'>{createdAt}</span>
        <span className='text-center text-[0.7rem] bg-[#60a5fa] w-4 h-4 m-auto rounded-full'>{countNotif}</span>
      </div>
    </div>
  )
}

export default Contact