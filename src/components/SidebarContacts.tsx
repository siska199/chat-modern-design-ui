import HeaderSidebarContacts from './HeaderSidebarContacts'
import SearchContact from './SearchContact'
import ListUserOnline from './ListUserOnline'
import ListContact from './ListContact'

const SidebarContacts = () => {
  return (
    <section className='w-[22rem] flex flex-col overflow-y-scroll scrollbar-hidden border-cd700 bg-cd800 border-r-[0.005rem]'>
      <HeaderSidebarContacts/>
      <SearchContact/>
      <ListUserOnline/>
      <ListContact/>
    </section>
  )
}

export default SidebarContacts