import {TPageProps } from "../lib/types"
import SidebarMenu from "../components/SidebarMenu"
const Page : React.FC<TPageProps> = ({children, type}) => {
  return (
    <article className='container overflow-hidden relative'>
      {type!=="auth"&&(
        <SidebarMenu/>
      )}
      {children}
    </article>
  )
}

export default Page