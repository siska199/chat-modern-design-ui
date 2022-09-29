import {useContext} from "react"
import {AiOutlineArrowRight} from 'react-icons/ai'
import Icon from "../atoms/Icon"
import SumContactInfo from "../atoms/SumContactInfo"
import ChatContext from "../context/ChatContext"
import { iconsHeaderMessagesBox } from "../lib/data"
import { TypeAction } from "../lib/types"


const HeaderMessagesBox = () => {
  const {state:{activeContactData:data}} = useContext(ChatContext)
  const { dispatch} = useContext(ChatContext)
  const handleShowContactInfo = ()=>{
    dispatch({
      type : TypeAction.SET_MODAL_CONTACT_INFO,
      payload : true
    })
  }
  const handleBack = ()=>{
    dispatch({
      type : TypeAction.SET_ACTIVE_CONTACT_DATA,
      payload : null
    })
  }
  return(
    <>    
      {
        data && (
          <div className="px-7 header">
            <SumContactInfo status={data.status} handleOnClickImage={handleShowContactInfo} type="contact" image={data.image} username={data.username} info={data.status} /> 
            <div className="flex gap-4">
            {
              iconsHeaderMessagesBox.map((data,i)=>(
                <Icon icon={data.icon} key={i} handleOnClickIcon={data.onClick}/>
              ))
            }
            <Icon icon={<AiOutlineArrowRight/>} customeClass={"md:hidden"} handleOnClickIcon={()=>handleBack()}/>
            </div>
          </div>

        )
      }
    </>
  )
}

export default HeaderMessagesBox