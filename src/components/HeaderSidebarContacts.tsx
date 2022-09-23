import {useState} from "react"
import Icon from '../atoms/Icon'
import SumContactInfo from '../atoms/SumContactInfo'
import { user } from '../lib/data'
import {BiDotsVerticalRounded} from "react-icons/bi"
import Dropdown from './Dropdown'

const HeaderSidebarContacts = () => {
  const [activeDropdown, setActiveDropdown] = useState(false)
  const {username, image} = user
  return (
    <div className='header px-3 py-7'>
      <SumContactInfo type="user-info" image={image} username={username} info={"My Account"} />
      <div className='relative'>
        <Icon type={activeDropdown?"with-bg":""} icon={<BiDotsVerticalRounded/>} handleOnClickIcon={()=>setActiveDropdown(activeDropdown?false:true)}/>
        {
          activeDropdown &&(
            <Dropdown/> 
          )
        }
      </div>
    </div>
  )
}

export default HeaderSidebarContacts