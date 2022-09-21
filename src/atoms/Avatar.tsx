import { AvatarProps } from "../lib/propsType"

const Avatar :React.FC<AvatarProps>=(props) =>{

  const {url , sizeType, online, handleOnClickImage} = props

  let size
  switch(sizeType){
    case "small":
      size = "w-[2.5rem] h-[2.5rem]"
      break;
    case "medium" :
      size = "min-w-[3rem] h-[3rem]"
      break;
    case "big":
      size = "w-[12rem] h-[12rem]"
      break;
  }
  return (
    <div className="relative">
      <img onClick={()=>handleOnClickImage&&handleOnClickImage()} src={url} className={`${size} rounded-full cursor-pointer`} alt=""/>
      {
        online && (
          <div className="absolute right-0 top-0 w-3 h-3 border-[0.1rem] border-cd800 rounded-full bg-main"></div>
        )
      }
    </div>
  )
}

export default Avatar