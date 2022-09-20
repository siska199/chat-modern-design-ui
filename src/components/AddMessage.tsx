import {RiBearSmileLine} from "react-icons/ri"
import {HiOutlinePaperClip} from "react-icons/hi"
import {RiMicFill} from "react-icons/ri"
import Icon from "../atoms/Icon"

const AddMessage = () => {
  return (
    <div className='bg-cd800 sticky bottom-0 px-5 py-3 flex justify-between items-center gap-1'>
      <Icon icon={<HiOutlinePaperClip/>} handleOnClickIcon={()=>console.log("icon")} />
      <div className='w-[80%]  flex mx-3 gap-3 items-center rounded-lg border-[0.005rem] bg-cd700 border-cd600 py-1 px-3'>
          <input className='w-full  bg-transparent font-thin text-sm placeholder:font-thin placeholder:text-sm outline-none' placeholder='Send message...'/>
          <Icon icon={<RiBearSmileLine/>} handleOnClickIcon={()=>console.log("icon")} type="with-bg"/>
      </div>
      <Icon icon={<RiMicFill/>} handleOnClickIcon={()=>console.log("icon")} />
    </div>
  )
}

export default AddMessage