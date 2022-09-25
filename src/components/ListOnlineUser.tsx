import {MdOutlineNavigateNext} from "react-icons/md"
import Avatar from "../atoms/Avatar"
import { contacts } from "../lib/data"
const ListOnlineUser = () => {
  return (
    <div className='p-3 flex flex-col'>
        <div className="flex justify-between ">
            <h1 className="font-medium">Online Now</h1>
            <span className="cursor-pointer text-sm text-cd500 font-thin flex items-center gap-1">more <MdOutlineNavigateNext className=""/></span>
        </div>
        <div className="flex mx-auto md:mx-0 max-w-[26rem] gap-4 overflow-x-scroll scrollbar-online my-[2rem]">
            {
                contacts.map((data,i)=>(
                    <div key={i} className="flex flex-col gap-3">
                        <Avatar online={true} sizeType="medium"  url={data.image}/>
                        <p className="max-w-[3rem] text-[0.7rem] text-cd500 font-thin">{data.username}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ListOnlineUser