import { TSumContactInfoProps } from "../lib/types"
import Avatar from "./Avatar"

const SumContactInfo : React.FC<TSumContactInfoProps> = (props) => {
  const {image, username, info,status, type,handleOnClickImage} = props
  return (
    <div className={`${type==="contact"&&"overflow-hidden"} flex items-center gap-3`}>
      <Avatar  handleOnClickImage={handleOnClickImage&&handleOnClickImage} online={status==="online"?true:false} url={image} sizeType="medium"/>
      <div className="overflow-hidden">
        <h1 className={`${type==="contact"?"":"text-lg "} font-thin tracking-wide`}>{username}</h1>
        <p className="text-[0.8rem] text-cd500 font-thin truncate text-ellipsis">{info}</p>
      </div>      
    </div>
  )
}

export default SumContactInfo