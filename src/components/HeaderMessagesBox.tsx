import Icon from "../atoms/Icon"
import SumContactInfo from "../atoms/SumContactInfo"
import { contactActive, iconsHeaderMessagesBox } from "../lib/data"
const HeaderMessagesBox = () => {
  const {image,username,status} = contactActive
  return (
    <div className="sticky top-0 z-10 px-7 py-5 border-b-[0.005rem] border-cd700 bg-cd800 flex justify-between">
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