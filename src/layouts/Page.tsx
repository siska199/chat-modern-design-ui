import {TPageProps } from "../lib/types"

const Page : React.FC<TPageProps> = ({children}) => {
  return (
    <article className='container overflow-hidden relative'>
      {children}
    </article>
  )
}

export default Page