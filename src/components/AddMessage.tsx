import React, {useState, useRef} from "react"
import {IoCloseOutline} from "react-icons/io5"
import {useContext} from "react"
import {RiBearSmileLine} from "react-icons/ri"
import {HiOutlinePaperClip} from "react-icons/hi"
import {RiMicFill} from "react-icons/ri"
import Icon from "../atoms/Icon"
import ChatContext from "../context/ChatContext"
import { useAppSelector } from "../redux/store"
import SOCKET_EVENTS from "../lib/socketEvents"
import { getFormatDay, handleUploadImageToCloudinary } from "../lib/helperFunction"
import Loading from "../atoms/Loading"

const AddMessage = () => {
  const inputImageRef = useRef<HTMLInputElement>(null)
  const idSender = useAppSelector(state=>state.auths.user?.id)
  const {socket, state:{activeContactData}} = useContext(ChatContext)
  const [value, setValue] = useState("")
  const [image,setImage] = useState<{file: File|null;url:string|null}>({
    file:null,
    url : null
  })
  const [loading, setLoading] = useState(false)
  const handleSubmitMessage = async (e:React.KeyboardEvent<HTMLInputElement>)=>{
    const currentDate = new Date()
    if(e.code==="Enter" && value!==""){
      setLoading(true)
      let url =""
      let voice = ""
      if(image.file) url = await handleUploadImageToCloudinary(image.file)
      
      const form = {
        idSender : idSender,
        idReceiver : activeContactData?.id,
        text:value,
        image : url,
        vaoice : voice,
        day: getFormatDay(currentDate.toString())
      }
      console.log("form: ", form)
      socket?.emit(SOCKET_EVENTS.SEND_MESSAGE,form)
      setValue("")
      handleCloseImage()
      setLoading(false)
    }
  }

  const handleOnChangeImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files){
      const url = URL.createObjectURL(new Blob([e.target.files[0]]))
      setImage({
        url : url,
        file : e.target.files[0]
      })
      e.target.value = ''
    }
  }
  const handleCloseImage = ()=>{
    setImage({
      url:null,
      file:null
    })
  }
  return (
    <>
    {
      image.url &&(        
      <div className="absolute top-0 left-0 w-full h-full bg-cd800 p-5">
        <Icon icon={<IoCloseOutline/>} handleOnClickIcon={handleCloseImage}/>
        <div className="flex mx-auto relative justify-center items-center  mt-2">
          <img  src={image?.url} className="w-[20rem] object-contain h-[20rem] mx-auto" alt="" />
          {loading &&(
            <Loading type="spinner" size={"w-[5rem] h-[5rem]"}/>
          )}
        </div>
      </div>
      )
    }
      <div className='bg-cd800 sticky bottom-0 px-3 flex justify-center items-center gap-1 py-4'>
        <Icon icon={<HiOutlinePaperClip/>} handleOnClickIcon={()=>inputImageRef?.current?.click()} />
        <div className='w-[80%]  flex mx-3 gap-3 items-center rounded-lg border-[0.005rem] bg-cd700 border-cd600 px-3'>
            <input value={value} onChange={(e)=>setValue(e.target.value)} onKeyDown={(e)=>handleSubmitMessage(e)} className='w-full  bg-transparent font-thin text-sm placeholder:font-thin placeholder:text-sm outline-none' placeholder='Send message...'/>
            <Icon icon={<RiBearSmileLine/>} handleOnClickIcon={()=>console.log("icon")} />
        </div>
        <Icon icon={<RiMicFill/>} handleOnClickIcon={()=>console.log("")} />
        <input ref={inputImageRef} onChange={(e)=>handleOnChangeImage(e)} type="file" accept="image/*" hidden />
      </div>

    </>
  )
}

export default AddMessage