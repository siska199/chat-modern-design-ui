import Icon from '../atoms/Icon'
import {IoCloseOutline} from "react-icons/io5"
import ProfileInfo from '../atoms/ProfileInfo'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { handleModalProfile,handleModalChangeImage, TKeyFormUpdateProfile } from '../redux/features/authSlice'

const Profile = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state=>state.auths.user)
  const modalProfile = useAppSelector(state=>state.auths.modalProfile)
  const handleCloseProfile = ()=>{
    dispatch(handleModalProfile(false))
  }
  return (
    <>
    {
      user&&(
        <div className={`absolute top-0 bg-cd800 h-full w-full z-[50] ${modalProfile?"translate-x-0":"-translate-x-[120%]"} transition-shortcut-slow `}>
          <header className='header px-5'>
            <h1 className='font-semibold text-[1.3rem]'>Profile &#127800;</h1>
            <Icon icon={<IoCloseOutline/>} handleOnClickIcon={handleCloseProfile} />
          </header>
          <section className='flex flex-col'>
            <div onClick={()=>dispatch(handleModalChangeImage(true))} className='mx-auto my-7 relative change-profile'>
              <img src={user.image} alt="" className='avatar-big '/>
            </div>
            <div className='my-5 flex flex-col gap-10 px-5'>
              <ProfileInfo value={user.fullname} label={TKeyFormUpdateProfile.FULLNAME}/>
              <ProfileInfo value={user.username} label={TKeyFormUpdateProfile.USERNAME}/>
              <ProfileInfo value={user.info} label={TKeyFormUpdateProfile.INFO}/>
            </div>
          </section>
        </div>
        )
    }
    </>
  )
}

export default Profile