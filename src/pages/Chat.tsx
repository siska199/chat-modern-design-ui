import ChangeProfile from '../components/ChangeProfile'
import ContactInfo from '../components/ContactInfo'
import MessagesBox from '../components/MessagesBox'
import SidebarContacts from '../components/SidebarContacts'
import SidebarMenu from '../components/SidebarMenu'
import Page from '../layouts/Page'
import { useAppSelector } from '../redux/store'

const Chat = () => {
  const modalChangeImage = useAppSelector(state=>state.auths.modalChangeImage )
  return (
    <Page>
        <SidebarContacts/>
        <MessagesBox/>
        <ContactInfo/>
        {
          modalChangeImage&&(
            <ChangeProfile/>
          )
        }
    </Page>
  )
}

export default Chat