import React from 'react'
import { TIconProps } from '../lib/types'

const Icon : React.FC<TIconProps> = (props) => {
  const {icon, handleOnClickIcon, customeClass} = props

  return (
    <div className={`${customeClass} cursor-pointer w-[2.7rem] h-[2.7rem] text-[1.3rem] flex justify-center items-center rounded-full border-[0.005rem] border-cd700 hover:bg-cd700`} onClick={()=>handleOnClickIcon()}>
      {icon}
    </div>
  )
}

export default Icon