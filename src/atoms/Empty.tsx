import React from 'react'

type Props = {
    messages : string
}

const Empty : React.FC<Props> = ({messages})=> {
  return (
    <div className="w-full">
        <p className="text-cd500 border-[0.005rem] border-cd700 text-sm py-2 text-center">
           {messages}
        </p>
    </div>
  )
}

export default Empty