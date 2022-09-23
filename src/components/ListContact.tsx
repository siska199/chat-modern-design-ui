import Contact from '../atoms/Contact'
import { contacts } from '../lib/data'
const ListContact = () => {
  return (
    <div className='h-full overflow-y-scroll scrollbar-hidden'>
      <h1 className='px-3 font-medium mb-4 '>Messages</h1>
      <div>
        {
          contacts.map((data,i)=>(
            <Contact key={i} {...data}/>
          ))
        }
      </div>
    </div>
  )
}

export default ListContact