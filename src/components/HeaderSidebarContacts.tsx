import Icon from '../atoms/Icon'
import SumContactInfo from '../atoms/SumContactInfo'
import { user } from '../lib/data'
import {BiDotsVerticalRounded} from "react-icons/bi"

const HeaderSidebarContacts = () => {
  const {username, image} = user
  return (
    <div className='header px-3 py-7'>
      <SumContactInfo type="user-info" image={image} username={username} info={"My Account"} />
      <Icon icon={<BiDotsVerticalRounded/>} handleOnClickIcon={()=>console.log("icon clicked")}/>
    </div>
  )
}

export default HeaderSidebarContacts