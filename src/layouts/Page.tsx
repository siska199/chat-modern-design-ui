import { PageProps } from "../lib/propsType"

const Page : React.FC<PageProps> = ({children}) => {
  return (
    <article className='container'>
      {children}
    </article>
  )
}

export default Page