import MenuItem from '../atoms/MenuItem'
import { dataDropdownSidebarContacts } from '../lib/data'
import { handleLogout } from '../redux/features/authSlice'
import { useAppDispatch } from '../redux/store'
import {useNavigate} from "react-router-dom"
import { Alert } from '../lib/helperFunction'
import Dropdown from '../layouts/Dropdown'
import { useContext } from 'react'
import ChatContext from '../context/ChatContext'
import { TypeAction } from '../lib/types'
const MenuUserSetting= () => {
  const {dispatch:dispatchChatContext} = useContext(ChatContext)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleMenuLogout = ()=>{
    dispatch(handleLogout()).then(()=>{
      Alert("success","Logout Success")
      dispatchChatContext({
        type : TypeAction.SET_ACTIVE_CONTACT_DATA,
        payload : null
      })
      navigate("/")
    })
  }
  return (
    <Dropdown>
      <div>
        {
            dataDropdownSidebarContacts.map((data,i)=>{
              let handleClickMenu = ()=>{}
              if(data.name.toLowerCase()==="keluar") handleClickMenu = handleMenuLogout
              return (<MenuItem key={i} handleClickMenu={handleClickMenu} data={data.name}/>)
            })
        }
      </div>
    </Dropdown>
  )
}

export default MenuUserSetting