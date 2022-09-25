import {useContext} from "react"
import HeaderSidebarContacts from './HeaderSidebarContacts'
import SearchContact from './SearchContact'
import ListUserOnline from './ListOnlineUser'
import ListContact from './ListContact'
import Profile from './Profile'
import ChatContext from '../context/ChatContext'

const SidebarContacts = () => {
  const {state:{activeContactData}} = useContext(ChatContext)
  console.log("active contact data: ", activeContactData)
  return (
    <section className={`w-full ${activeContactData&&"hidden"} md:w-[22rem]  pr-[3rem]  xs:pr-0 relative flex flex-col border-cd700 bg-cd800 border-r-[0.005rem]`}>
      <>
        <HeaderSidebarContacts/>
        <SearchContact/>
        <ListUserOnline/>
        <ListContact/>
      </>
      <Profile/>
    </section>
  )
}

export default SidebarContacts