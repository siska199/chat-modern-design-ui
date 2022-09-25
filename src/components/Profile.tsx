import Icon from '../atoms/Icon'
import { user } from '../lib/data'
import {IoCloseOutline} from "react-icons/io5"
import ProfileInfo from '../atoms/ProfileInfo'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { handleModalProfile } from '../redux/features/authSlice'
const Profile = () => {
  const dispatch = useAppDispatch()
  const {image, username, fullname, info} = user
  const modalProfile = useAppSelector(state=>state.auths.modalProfile)
  const handleCloseProfile = ()=>{
    console.log("loggg")
    dispatch(handleModalProfile(false))
  }
  return (
    <div className={`absolute top-0 bg-cd800 h-full w-full z-20 ${modalProfile?"translate-x-0":"-translate-x-[120%]"} transition-shortcut`}>
      <header className='header px-5'>
        <h1 className='font-semibold text-[1.3rem]'>Profile &#127800;</h1>
        <Icon icon={<IoCloseOutline/>} handleOnClickIcon={handleCloseProfile} />
      </header>
      <section className='flex flex-col'>
        <div className='mx-auto py-7'>
          <img src={image} alt="" className='avatar-big'/>
        </div>
        <div className='my-5 flex flex-col gap-10 px-5'>
          <ProfileInfo value={username} label={"Username"}/>
          <ProfileInfo value={fullname} label={"Name"}/>
          <ProfileInfo value={info} label={"Info"}/>
        </div>
      </section>
    </div>
  )
}

export default Profile