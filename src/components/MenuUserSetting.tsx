import MenuItem from '../atoms/MenuItem'
import { dataDropdownSidebarContacts } from '../lib/data'
import { handleLogout } from '../redux/features/authSlice'
import { useAppDispatch } from '../redux/store'
import {useNavigate} from "react-router-dom"
import { Alert } from '../lib/helperFunction'
import Dropdown from '../layouts/Dropdown'
const MenuUserSetting= () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleMenuLogout = ()=>{
    dispatch(handleLogout()).then(()=>{
      Alert("success","Logout Success")
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