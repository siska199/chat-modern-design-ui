import Icon from '../atoms/Icon'
import { user } from '../lib/data'
import {IoCloseOutline} from "react-icons/io5"
import ProfileInfo from '../atoms/ProfileInfo'

const Profile = () => {
  const {image, username, name, info} = user

  return (
    <div className={`absolute top-0 bg-cd800 h-full w-full z-20 -translate-x-[120%] translate-x-0 `}>
      <header className='header px-5'>
        <h1 className='font-semibold text-[1.3rem]'>Profile &#127800;</h1>
        <Icon icon={<IoCloseOutline/>} handleOnClickIcon={()=>console.log("close profile")} />
      </header>
      <section className='flex flex-col'>
        <div className='mx-auto py-7'>
          <img src={image} alt="" className='avatar-big'/>
        </div>
        <div className='my-5 flex flex-col gap-10 px-5'>
          <ProfileInfo value={username} label={"Username"}/>
          <ProfileInfo value={name} label={"Name"}/>
          <ProfileInfo value={info} label={"Info"}/>
        </div>
      </section>
    </div>
  )
}

export default Profile