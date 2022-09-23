import MenuItem from '../atoms/MenuItem'
import { dataDropdownSidebarContacts } from '../lib/data'
import { handleLogout } from '../redux/features/authSlice'
import { useAppDispatch } from '../redux/store'
import {useNavigate} from "react-router-dom"
import { Alert } from '../lib/helperFunction'
const Dropdown = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleMenuLogout = ()=>{
    dispatch(handleLogout()).then(()=>{
      Alert("Success","success","Logout Success")
      navigate("/")
    })
  }
  return (
    <section className='absolute top-[3rem] w-[10rem] right-[0.1rem] z-[99] font-thin  py-3 rounded-md bg-[#27272a]'>
        {
            dataDropdownSidebarContacts.map((data,i)=>{
              let handleClickMenu = ()=>{}
              if(data.name.toLowerCase()==="keluar") handleClickMenu = handleMenuLogout
              return (<MenuItem key={i} handleClickMenu={handleClickMenu} data={data.name}/>)
            })
        }
    </section>
  )
}

export default Dropdown