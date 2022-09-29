import {useState} from "react"
import Icon from '../atoms/Icon'
import SumContactInfo from '../atoms/SumContactInfo'
import {BiDotsVerticalRounded} from "react-icons/bi"
import MenuUserSetting from "./MenuUserSetting"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { handleModalProfile } from "../redux/features/authSlice"

const HeaderSidebarContacts = () => {
  const user= useAppSelector(state=>state.auths.user)
  const [activeDropdown, setActiveDropdown] = useState(false)
  const dispatch = useAppDispatch()
  const handleShowProfile = ()=>{
    dispatch(handleModalProfile(true))
  }
  return (
    <>
      {
        user && (
          <div className='header  px-3 py-7 '>
            <SumContactInfo status={user.status} handleOnClickImage={handleShowProfile} type="user-info" image={user.image} username={user.username} info={"My Account"} />
            <div className='relative'>
              <Icon customeClass={`hover:bg-cd700 ${activeDropdown&&"bg-cd700"} w-[2.2rem] h-[2.2rem]`} icon={<BiDotsVerticalRounded/>} handleOnClickIcon={()=>setActiveDropdown(activeDropdown?false:true)}/>
              {
                activeDropdown &&(
                  <MenuUserSetting/> 
                )
              }
            </div>
          </div>
        )
      }
    </>
  )
}

export default HeaderSidebarContacts