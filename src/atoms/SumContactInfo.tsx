import { SumContactInfoProps } from "../lib/propsType"
import Avatar from "./Avatar"

const SumContactInfo : React.FC<SumContactInfoProps> = (props) => {
  const {image, username, info, type} = props
  return (
    <div className="flex items-center gap-3">
      <Avatar online={type==="contact"?true:false} url={image} sizeType="medium"/>
      <div>
        <h1 className={`${type==="contact"?"":"text-lg "} font-thin tracking-wide`}>{username}</h1>
        <p className="text-[0.8rem] text-cd500 font-thin">{info}</p>
      </div>      
    </div>
  )
}

export default SumContactInfo