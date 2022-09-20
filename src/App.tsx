import {useEffect} from "react"
import Chat from "./pages/Chat";


function App() {
  useEffect(()=>{
    const html = document.querySelector("html")
    html?.classList.add("dark")
  },[])
  return (
    <>
      <Chat/>
    </>
  );
}

export default App;
