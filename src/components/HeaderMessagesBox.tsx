import {useContext} from "react"
import Icon from "../atoms/Icon"
import SumContactInfo from "../atoms/SumContactInfo"
import ChatContext from "../context/ChatContext"
import { iconsHeaderMessagesBox } from "../lib/data"
import { TypeAction } from "../lib/types"

const HeaderMessagesBox = () => {
  const {state:{activeContactData:data}} = useContext(ChatContext)
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
            </div>
          </div>

        )
      }
    </>
  )
}

export default HeaderMessagesBox