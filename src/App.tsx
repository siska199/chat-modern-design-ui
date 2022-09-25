import {useEffect} from "react"
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import {Routes,Route} from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./redux/store";
import { handleGetProfileData } from "./redux/features/authSlice";

function App() {
  const user = useAppSelector(state=>state.auths.user)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    const token = localStorage.getItem("token")
    token && dispatch(handleGetProfileData())
    const html = document.querySelector("html")
    html?.classList.add("dark")
  },[])

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
