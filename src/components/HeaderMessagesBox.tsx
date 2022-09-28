import {useContext} from "react"
import Icon from "../atoms/Icon"
import SumContactInfo from "../atoms/SumContactInfo"
import ChatContext from "../context/ChatContext"
import { contactActive, iconsHeaderMessagesBox } from "../lib/data"
import { TypeAction } from "../lib/types"

const HeaderMessagesBox = () => {
  const {image,username,status} = contactActive
  const { dispatch} = useContext(ChatContext)
  console.log("dispatch: ", dispatch)
  const handleShowContactInfo = ()=>{
    console.log("test")
    dispatch({
      type : TypeAction.SET_MODAL_CONTACT_INFO,
      payload : true
    })
  }

  return(
    <div className="px-7 header">
      <SumContactInfo handleOnClickImage={handleShowContactInfo} type="contact" image={image} username={username} info={status} /> 
      <div className="flex gap-4">
      {
        iconsHeaderMessagesBox.map((data,i)=>(
          <Icon icon={data.icon} key={i} handleOnClickIcon={data.onClick}/>
        ))
      }
      </div>
    </div>
  )
}

export default HeaderMessagesBox