import React from 'react'

const Dropdown : React.FC<{children:JSX.Element}> = ({children}) => {
  return (
    <section className='absolute top-[3rem] w-[10rem] right-[0.1rem] z-[99] font-thin  py-3 rounded-md bg-[#27272a]'>
        {children}
    </section>
  )
}

export default Dropdown