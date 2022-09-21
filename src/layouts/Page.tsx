import { PageProps } from "../lib/propsType"

const Page : React.FC<PageProps> = ({children}) => {
  return (
    <article className='container overflow-x-hidden'>
      {children}
    </article>
  )
}

export default Page