import {useState, useRef,ChangeEvent} from "react"
import {IoCloseOutline} from "react-icons/io5"
import Icon from '../atoms/Icon'
import Modal from '../layouts/Modal'
import { handleUploadImageToCloudinary } from "../lib/helperFunction"
import { handleGetProfileData, handleModalChangeImage, handleUpdateProfile,TFormUpdateProfile  } from "../redux/features/authSlice"
import { useAppDispatch } from "../redux/store"

const ChangeProfile = () => {
  const dispatch = useAppDispatch()
  const imageRef = useRef<HTMLInputElement | null>(null)
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleOnChangeImage = (e:ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.files)
    if(e.target.files){
      setFile(e.target.files[0])
      const url = URL.createObjectURL(new Blob([e.target.files[0]]))
      setImageURL(url)
    }
  }
  const handleClickButton = async (type : "upload"|"save")=>{
    if(type ==="upload"){
      imageRef?.current?.click()
    }else{
      const urlImage = file && await handleUploadImageToCloudinary(file) 
      const form: TFormUpdateProfile = {image :urlImage}
      await dispatch(handleUpdateProfile(form))
      await dispatch(handleGetProfileData())
      dispatch(handleModalChangeImage(false))
    }
  }
  return (
    <Modal styles={"flex"}>
        <article className='bg-cd800 w-[30rem] min-h-[25rem] max-h-[25rem] m-auto flex flex-col'>
          <header className="p-4">
            <Icon  icon={<IoCloseOutline/>} handleOnClickIcon={()=>dispatch(handleModalChangeImage(false))}/>
          </header>
          <section className={`flex flex-col gap-4 h-full w-full ${!imageURL&&"m-auto"}  `}>
            {
              imageURL&&(
                <>
                  <div onClick={()=>imageRef?.current?.click()} className="w-[15rem] h-[15rem] m-auto rounded-full overflow-hidden relative change-profile">
                    <img className=" object-contain" src={imageURL} alt=""/>
                  </div>
                </>
              )
            }
            <button onClick={()=>handleClickButton(imageURL?"save":"upload")} className="m-auto text-sm bg-cd700 px-5 py-2 font-bold hover:scale-[1.1]">{imageURL?"Save Photo":"Upload Photo"} </button> 
            <input onChange={(e)=>handleOnChangeImage(e)} ref={imageRef} type="file" accept="image/*" hidden/>
          </section>
        </article>
    </Modal>
  )
}

export default ChangeProfile