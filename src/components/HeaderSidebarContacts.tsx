import Icon from '../atoms/Icon'
import SumContactInfo from '../atoms/SumContactInfo'
import { user } from '../lib/data'
import {BiDotsVerticalRounded} from "react-icons/bi"

const HeaderSidebarContacts = () => {
  const {username, image} = user
  return (
    <div className='flex sticky top-0 bg-cd800 z-10 py-5 items-center justify-between border-b-[0.005rem] border-cd700 w-full px-3'>
      <SumContactInfo type="user-info" image={image} username={username} info={"My Account"} />
      <Icon icon={<BiDotsVerticalRounded/>} handleOnClickIcon={()=>console.log("icon clicked")}/>
    </div>
  )
}

export default HeaderSidebarContacts