import { useContext, useState } from "react";
import Toolbar from "../components/Toolbar";
import { ThemeContext } from "../context/themecontext";
import "./chats.css"
const Chats = () =>{
     const [openedChat, setOpenChat] = useState()
     const {theme} = useContext(ThemeContext)
     return (
          <div className={`w-screen h-screen ${theme == "dark" ? 'chats-black':'chats-white'}`}>
               <Toolbar/>
          </div>
     )
}
export default Chats; 