import React, {useState} from 'react'
import { TProfileInfoProps } from '../lib/types'

const ProfileInfo:React.FC<TProfileInfoProps> = (props) => {
    const {label, value} = props
    const [edit, setEdit] = useState(false)
  return (
    <div className='border-b-[0.005rem] border-cd600'>
        <label className='font-medium mb-2'>{label}</label>
        <div className='flex items-center justify-between'>
        {
            edit?(
                <>
                    <input className='font-thin w-full outline-none bg-cd800' value={value?value:""}/>
                    <span onClick={()=>setEdit(false)}>&#128500;</span>
                </>
            ):(
                <>
                    {value}
                    <span className='cursor-pointer' onClick={()=>setEdit(true)}>&#128393;</span>
                </>
            )
        }
                </div>
    </div>
  )
}

export default ProfileInfo