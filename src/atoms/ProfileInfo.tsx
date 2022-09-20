import React, {useState} from 'react'
import { ProfileInfoProps } from '../lib/propsType'
import {FcEditImage} from "react-icons/fc"

const ProfileInfo:React.FC<ProfileInfoProps> = (props) => {
    const {label, value} = props
    const [edit, setEdit] = useState(false)
  return (
    <div className='border-b-[0.005rem] border-cd600'>
        <label className='font-medium mb-2'>{label}</label>
        <div className='flex items-center justify-between'>
        {
            edit?(
                <>
                    <input className='font-thin w-full outline-none bg-cd800' value={value}/>
                    <span>&#128500;</span>
                </>
            ):(
                <>
                    {value}
                    <span className='cursor-pointer'>&#128393;</span>
                </>
            )
        }
                </div>
    </div>
  )
}

export default ProfileInfo