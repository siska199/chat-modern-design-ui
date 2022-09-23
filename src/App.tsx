import {useEffect} from "react"
import Auth from "./pages/Auth";
// import Chat from "./pages/Chat";


function App() {
  useEffect(()=>{
    const html = document.querySelector("html")
    html?.classList.add("dark")
  },[])
  return (
    <>
      <Auth/>
    </>
  );
}

export default App;
