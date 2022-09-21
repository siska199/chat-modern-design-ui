import HeaderSidebarContacts from './HeaderSidebarContacts'
import SearchContact from './SearchContact'
import ListUserOnline from './ListUserOnline'
import ListContact from './ListContact'
import Profile from './Profile'

const SidebarContacts = () => {
  return (
    <section className='w-[22rem] relative flex flex-col border-cd700 bg-cd800 border-r-[0.005rem]'>
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