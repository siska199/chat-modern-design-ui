import {SiWechat} from "react-icons/si"
import { iconsMenuSidebar } from "../lib/data"
import {AiOutlinePlus} from "react-icons/ai"
import Avatar from "../atoms/Avatar"

const SidebarMenu = () => {
  const activeMenu = "messages"
  const image = "https://i.pinimg.com/736x/58/1b/7a/581b7aabc75e966e846034df4752514e.jpg"
  return (
    <section className='flex-[0.07] p-3 flex flex-col justify-between items-center border-cd700 border-r-[0.005rem] h-full bg-cd800'>
      <div className="cursor-pointer border-[0.15rem]  border-main bg-white flex rounded-full h-[2.7rem] w-[2.7rem]">
        <SiWechat  
        className="text-[1.8rem] m-auto text-main"/>
      </div>

      <div className="flex flex-col gap-4 text-[1.2rem] ">
        {
          iconsMenuSidebar.map((data,i)=>{
            const active = activeMenu && activeMenu===data.name
            return (
            <div className={`${active&&"bg-main text-white"} hover:text-white hover:bg-main text-cd500 w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer rounded-full border-cd600`}>
              { active? data.active : data.inActive}
            </div>)
          })
        }
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-cd600 text-cd500 hover:text-white hover:bg-cd700 flex rounded-full w-[2.5rem] h-[2.5rem] cursor-pointer">
          <AiOutlinePlus className="m-auto"/>
        </div>
        <Avatar sizeType="small" url={image} handleOnClickImage={()=>console.log("open profile modal")}/>
      </div>
    </section>
  )
}

export default SidebarMenu