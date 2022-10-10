import {TPageProps } from "../lib/types"
import SidebarMenu from "../components/SidebarMenu"
const Page : React.FC<TPageProps> = ({children}) => {
  return (
    <article className='container overflow-hidden relative'>
      <SidebarMenu/>
      {children}
    </article>
  )
}

export default Page