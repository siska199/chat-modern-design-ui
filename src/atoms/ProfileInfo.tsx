import React, {useState} from 'react'
import { TProfileInfoProps } from '../lib/types'
import { useAppDispatch } from '../redux/store'
import { handleGetProfileData, handleUpdateProfile, TFormUpdateProfile } from '../redux/features/authSlice'

const ProfileInfo:React.FC<TProfileInfoProps> = (props) => {
    const dispatch = useAppDispatch()
    const {label, value} = props
    const [valueInput, setValueInput] = useState(value?value:"")
    const [edit, setEdit] = useState(false)
    
    const handleUpdateProfileInfo = async()=>{
      const form : TFormUpdateProfile = {[label]:valueInput}
        await dispatch(handleUpdateProfile(form))
        await dispatch(handleGetProfileData())
        setEdit(false)
    }
  return (
    <div className='border-b-[0.005rem] border-cd600'>
        <label className='font-medium mb-2'>{label}</label>
        <div className='flex items-center justify-between font-thin'>
            {edit ?
                    <>
                      <input onChange={(e)=>setValueInput(e.target.value)} className='font-thin w-full outline-none bg-cd800' value={valueInput}/> 
                      <span className='cursor-pointer' onClick={()=>handleUpdateProfileInfo()}>✔️</span>
                    </>
                    :<>
                      {(label==="info"&&value==="")?"No info available":value}
                      <span className='cursor-pointer' onClick={()=>setEdit(true)}>✏</span>
                    </>
            }
        </div>
    </div>
  )
}

export default ProfileInfo