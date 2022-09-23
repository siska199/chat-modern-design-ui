import React from 'react'

const MenuItem : React.FC<{data:string,handleClickMenu:()=>void}> = (props) => {
    const {data, handleClickMenu} = props
  return (
    <div onClick={()=>handleClickMenu()} className="cursor-pointer hover:text-cd500 hover:bg-cd700 px-3 py-1">
    {data}
</div>
  )
}

export default MenuItem