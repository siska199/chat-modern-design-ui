import React, {useState, useRef} from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { TInputProps, } from '../lib/types'

const Input:React.FC<TInputProps> = (props) => {
  const inputRef=useRef<HTMLInputElement>(null)
  const {label, handleOnChange,error,type, value,...inputProps} = props
  const [seePassword, setSeePassword] = useState(false)
  const typePassword = (label==="Password"&&seePassword===true)?"text" :"password"

  return (
      <div className='w-full relative rounded-md '>
        <input ref={inputRef} onChange={(e)=>handleOnChange(e)} value={value} type={label==="Password"?typePassword:type} className='input-auth peer font-thin  w-full outline-none bg-cd700 rounded-md p-2 md:p-3 placeholder:text-cd700' placeholder={label}  {...inputProps}/>
        {
          (label==="Password"&&value!=="")&&(
            <div onClick={()=>setSeePassword(seePassword?false:true)} className='absolute cursor-pointer top-[0.9rem] right-[0.75rem] text-lg'>
              {seePassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>} 
            </div>
          )
        }
        <div className='text-[0.7rem] mt-2 hidden peer-invalid:block'>{error}</div>
        <span onClick={()=>inputRef.current&&inputRef.current.focus()} className='font-medium  text-cd500 left-[0.75rem] text-sm bg-cd00 -top-[0.75rem] absolute  peer-placeholder-shown:top-[0.65rem] md:peer-placeholder-shown:top-[0.75rem] peer-placeholder-shown:text-[1rem] peer-focus:!-top-[0.75rem] peer-focus:text-sm fornt-medium transition-[top] ease-in duration-300'>{label}</span>
      </div>
  )
}

export default Input