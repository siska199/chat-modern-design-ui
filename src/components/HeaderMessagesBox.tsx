import Icon from "../atoms/Icon"
import SumContactInfo from "../atoms/SumContactInfo"
import { contactActive, iconsHeaderMessagesBox } from "../lib/data"
const HeaderMessagesBox = () => {
  const {image,username,status} = contactActive
  return (
    <div className=" px-7 header">
      <SumContactInfo type="contact" image={image} username={username} info={status} /> 
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