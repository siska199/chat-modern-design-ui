import {IoCloseOutline} from "react-icons/io5"
import {FcFullTrash} from "react-icons/fc"
import Icon from '../atoms/Icon'
import { contactActive } from '../lib/data'
import { useContext } from "react"
import ChatContext from "../context/ChatContext"
import { TypeAction } from "../lib/types"

const ContactInfo = () => {
  const {state:{modalContactInfo, activeContactData: data}, dispatch} = useContext(ChatContext)
  const handleCloseContactInfo = ()=>{
    dispatch({
      type : TypeAction.SET_MODAL_CONTACT_INFO,
      payload: false
    })
  }
  return (
    <article className={`w-0 ${modalContactInfo&&"w-[22rem]"} border-l-[0.005rem] border-cd600 transition-shortcut-fast `}>
        <header className='header px-3'>
          <h1 className='font-medium text-lg'>&#127802; Info Contact</h1>
          <Icon icon={<IoCloseOutline/>} handleOnClickIcon={handleCloseContactInfo}/>
        </header>
        <section className="my-[1.5rem] flex flex-col gap-[1.3rem]">
          <div className="text-center">
            <img src={data?.image} alt="" className="avatar-big m-auto "/>
            <h1 className="text-[1.5rem]">{data?.username}</h1>
            <p className="font-thin text-sm text-main">{data?.status}</p>
          </div>

          <div className="bg-cd700  p-2">
            <h1 className="text-md font-medium">Fullname &#127803;</h1>
            <p className="font-thin text-sm">{data?.fullname}</p>
          </div>
          <div className="bg-cd700  p-2">
            <h1 className="text-md font-medium">Info 🌼</h1>
            <p className="font-thin text-sm">{data?.info}</p>
          </div>
          <div className="bg-cd700 font-thin p-2">
            <ul className="flex flex-col gap-3 container-setting-contact-info">
              <li> <span>🚫</span> Blokir {data?.username}</li>
              <li> <span>👎</span> Laporkan {data?.username}</li>
              <li> <span className="mr-2"><FcFullTrash/></span> Hapus chat</li>
            </ul>
          </div>
        </section>
    </article>
  )
}

export default ContactInfo