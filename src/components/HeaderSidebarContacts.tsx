import {useState} from "react"
import Icon from '../atoms/Icon'
import SumContactInfo from '../atoms/SumContactInfo'
import { user } from '../lib/data'
import {BiDotsVerticalRounded} from "react-icons/bi"
import MenuUserSetting from "./MenuUserSetting"
import { useAppDispatch } from "../redux/store"
import { handleModalProfile } from "../redux/features/authSlice"

const HeaderSidebarContacts = () => {
  const [activeDropdown, setActiveDropdown] = useState(false)
  const {username, image} = user
  const dispatch = useAppDispatch()
  const handleShowProfile = ()=>{
    dispatch(handleModalProfile(true))
  }
  return (
    <div className='header  px-3 py-7 '>
      <SumContactInfo handleOnClickImage={handleShowProfile} type="user-info" image={image} username={username} info={"My Account"} />
      <div className='relative'>
        <Icon type={activeDropdown?"with-bg":""} icon={<BiDotsVerticalRounded/>} handleOnClickIcon={()=>setActiveDropdown(activeDropdown?false:true)}/>
        {
          activeDropdown &&(
            <MenuUserSetting/> 
          )
        }
      </div>
    </div>
  )
}

export default HeaderSidebarContacts