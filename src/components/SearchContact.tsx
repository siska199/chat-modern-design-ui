import {BsSearch} from "react-icons/bs"
const SearchContact = () => {
  return (
    <div className='bg-cd800  z-10 '>
      <div className='my-5  flex mx-3 p-3 gap-3 items-center rounded-lg border-[0.005rem] bg-cd700 border-cd600'>
          <BsSearch />
          <input className='bg-transparent w-full font-thin text-sm placeholder:font-thin placeholder:text-sm outline-none' placeholder='Search or start new chat...'/>
      </div>
    </div>
  )
}

export default SearchContact