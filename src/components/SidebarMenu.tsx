import {useState} from "react"
import {SiWechat} from "react-icons/si"
import { iconsMenuSidebar } from "../lib/data"
import {AiOutlinePlus} from "react-icons/ai"
import Avatar from "../atoms/Avatar"
import { useAppSelector } from "../redux/store"
import { useLocation, useNavigate } from "react-router-dom"

const SidebarMenu = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [activeMenu, setActiveMenu] = useState("chats")
  const user = useAppSelector(state=>state.auths.user)
  
  const handleChangeActiveMenu = (name:string)=>{
    switch(name){
      case "chats":
      case "contacts":
      case "history-telephones":
      case "videos":
      case "bookmarks":
        navigate(`/${name}`)
        setActiveMenu(name)
        break;
      case "settings":
        setActiveMenu(name)
        break;
      default:
        return null
        }
  }

  return (
    <section className='flex-[0.07] px-1 py-3 md:p-3 flex flex-col justify-between items-center border-cd700 border-r-[0.005rem] h-full bg-cd800'>
      <div className="cursor-pointer border-[0.15rem]  border-main bg-white flex rounded-full h-[2.7rem] w-[2.7rem]">
        <SiWechat  
        className="text-[1.8rem] m-auto text-main"/>
      </div>

      <div className="flex flex-col gap-4 text-[1.2rem] ">
        {
          iconsMenuSidebar.map((data,i)=>{
            const active = activeMenu === "settings"? activeMenu===data.name : pathname.includes(data.name)
            return (
              <button key={i} onClick={()=>handleChangeActiveMenu(data.name)}>
                <div className={`${active&&"bg-main text-white"} hover:text-white hover:bg-main text-cd500 w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer rounded-full border-cd600`}>
                  { active? data.active : data.inActive}
                </div>
              </button>
          )})
        }
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-cd600 text-cd500 hover:text-white hover:bg-cd700 flex rounded-full w-[2.5rem] h-[2.5rem] cursor-pointer">
          <AiOutlinePlus className="m-auto"/>
        </div>
        <Avatar sizeType="small" online={user?.status?true:false} url={user?user.image:""} handleOnClickImage={()=>console.log("open profile modal")}/>
      </div>
    </section>
  )
}

export default SidebarMenu