import {useState, useContext} from "react"
import {TbPlayerTrackPrev,TbPlayerTrackNext} from "react-icons/tb"
import Avatar from "../atoms/Avatar"
import Empty from "../atoms/Empty"
import ChatContext from "../context/ChatContext"
import SOCKET_EVENTS from "../lib/socketEvents"
//------>COU stands for card-online-user
//------>clientWidth dosent include border and offsetWidth include border

const ListOnlineUser = () => {
    const {socket, state:{activeContactData, contacts}} = useContext(ChatContext)
    const contactsOnlineUser = contacts?.filter(contact=>contact.status==="online")
    const [typeScroll, setTypeScroll] = useState<"right"|"left">("right")
    const [count, setCount] = useState(1)
    const containerCOU = document.querySelector(".container-cou") as HTMLElement 
    const cou = document.querySelector(".cou") as HTMLElement //cou : contact online user (the card)

    const handleScroll = ()=>{
        if(typeScroll==="right"){
            containerCOU.scrollLeft += (cou.offsetWidth+18)*(count*5)
        }else{
            containerCOU.scrollLeft -= (cou.offsetWidth+18)*(count*5)
        }
        setCount(prev=>{
            return typeScroll==="right"?prev+1:prev-1
        })

        setTypeScroll(prev=>{
            return containerCOU.scrollLeft+containerCOU.offsetWidth === containerCOU.scrollWidth ? "left":"right"
        })

    }

    const handleContactActive = (idContact:string)=>{
        socket?.emit(SOCKET_EVENTS.LOAD_ACTIVE_CONTACT,idContact)
        socket?.emit(SOCKET_EVENTS.LOAD_MESSAGES,idContact)
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
        <div className="container-cou scrollbar-hidden flex  max-w-[20rem] md:max-w-[26rem] overflow-x-hidden scrollbar-online my-4 md:my-[2rem] scroll-smooth">
            {
               contactsOnlineUser.length>0? contactsOnlineUser?.map((data,i)=>(
                    <div onClick={()=>handleContactActive(data.id)} key={i} className="cou flex flex-col gap-3 px-2 cursor-pointer">
                        <Avatar online={true} sizeType="medium"  url={data.image}/>
                        <p className={`${data.id===activeContactData?.id && "bg-cd700"} max-w-[3rem] text-[0.7rem] text-center text-cd500 font-thin`}>{data.username}</p>
                    </div>
                )):(
                <Empty messages={"Online User Dosen't Exist 🙅‍♀️"}/>
                )
            }
        </div>
    </div>
  )
}

export default ListOnlineUser