import {useEffect} from "react"
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import {Routes,Route} from "react-router-dom"
import {useSelector} from "react-redux"
import { RootState } from "./redux/store";

function App() {
  const user = useSelector<RootState>(state=>state.auths.user)
  useEffect(()=>{
    const html = document.querySelector("html")
    html?.classList.add("dark")
  },[])
  console.log(user)
  return (
    <>
      <Routes>
        {
          user ?(
            <>
              <Route path="/chat-home" element={<Chat/>} />
            </>
          ):(
            <Route path="/" element={<Auth/>} />
          )
        }
      </Routes>
    </>
  );
}

export default App;
