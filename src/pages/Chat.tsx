import MessagesBox from '../components/MessagesBox'
import SidebarContacts from '../components/SidebarContacts'
import SidebarMenu from '../components/SidebarMenu'
import Page from '../layouts/Page'

const Chat = () => {
  return (
    <Page>
      <SidebarMenu/>
      <SidebarContacts/>
      <MessagesBox/>
    </Page>
  )
}

export default Chat