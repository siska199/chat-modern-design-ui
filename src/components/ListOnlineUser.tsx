import {useState} from "react"
import {MdOutlineNavigateNext} from "react-icons/md"
import {TbPlayerTrackPrev,TbPlayerTrackNext} from "react-icons/tb"
import Avatar from "../atoms/Avatar"
import { contacts } from "../lib/data"

//COU stands for card-online-user
//clientWidth dosent include border and offsetWidth include border
const ListOnlineUser = () => {
    const [typeScroll, setTypeScroll] = useState<"right"|"left">("right")
    const [count, setCount] = useState(1)
    const containerCOU = document.querySelector(".container-cou") as HTMLElement 
    const cou = document.querySelector(".cou") as HTMLElement

    const handleScroll = ()=>{
        console.log("typescroll: ", typeScroll)
        if(typeScroll==="right"){
            console.log("rifht")
            containerCOU.scrollLeft += (cou.offsetWidth+18)*(count*5)
        }else{
            containerCOU.scrollLeft -= (cou.offsetWidth+18)*(count*5)
        }
        setCount(prev=>{
            return typeScroll==="right"?prev+1:prev-1
        })

        setTypeScroll(prev=>{
            console.log(containerCOU.scrollLeft+containerCOU.offsetWidth)
            console.log(containerCOU.scrollWidth)
            return containerCOU.scrollLeft+containerCOU.offsetWidth === containerCOU.scrollWidth ? "left":"right"
        })

    }

  return (
    <div className='p-3 flex flex-col'>
        <div className="flex justify-between ">
            <h1 className="font-medium">Online Now</h1>
            <span onClick={()=>handleScroll()} className="cursor-pointer text-sm text-cd500 font-thin flex items-center gap-1">
                {
                    typeScroll==="right"?(
                        <>more <TbPlayerTrackNext color="white" className=""/></>
                    ):(
                        <><TbPlayerTrackPrev color="white" className=""/> less </>
                    )
                }
                
            </span>
        </div>
        <div className="container-cou scrollbar-hidden flex mx-auto md:mx-0 max-w-[20rem] md:max-w-[26rem] overflow-x-hidden scrollbar-online my-4 md:my-[2rem] scroll-smooth">
            {
                contacts.map((data,i)=>(
                    <div key={i} className="flex flex-col gap-3 cou px-2">
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