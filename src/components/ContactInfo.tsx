import {IoCloseOutline} from "react-icons/io5"
import {FcFullTrash} from "react-icons/fc"
import Icon from '../atoms/Icon'
import { contactActive } from '../lib/data'

const ContactInfo = () => {
  const {image, username, info, status, fullname} = contactActive
  return (
    <article className='w-[18rem] border-l-[0.005rem] border-cd600'>
        <header className='header px-3'>
          <h1 className='font-medium text-lg'>&#127802; Info Contact</h1>
          <Icon icon={<IoCloseOutline/>} handleOnClickIcon={()=>console.log("close profile")}/>
        </header>
        <section className="my-[1.5rem] flex flex-col gap-[1.3rem]">
          <div className="text-center">
            <img src={image} alt="" className="avatar-big m-auto "/>
            <h1 className="text-[1.5rem]">{username}</h1>
            <p className="font-thin text-sm text-main">{status}</p>
          </div>

          <div className="bg-cd700  p-2">
            <h1 className="text-md font-medium">Fullname &#127803;</h1>
            <p className="font-thin text-sm">{fullname}</p>
          </div>
          <div className="bg-cd700  p-2">
            <h1 className="text-md font-medium">Info 🌼</h1>
            <p className="font-thin text-sm">{info}</p>
          </div>
          <div className="bg-cd700 font-thin p-2">
            <ul className="flex flex-col gap-3 container-setting-contact-info">
              <li> <span>🚫</span> Blokir {username}</li>
              <li> <span>👎</span> Laporkan {username}</li>
              <li> <span className="mr-2"><FcFullTrash/></span> Hapus chat</li>
            </ul>
          </div>
        </section>
    </article>
  )
}

export default ContactInfo