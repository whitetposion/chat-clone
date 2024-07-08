import { useContext, useState, useEffect } from "react";
import Toolbar from "../components/Toolbar";
import { ThemeContext } from "../context/themecontext";
import "./chats.css"
import ChatList from "../components/ChatList";
import ChatSection from "../components/ChatSection";
const Chats = () =>{
     
     const [openedChat, setOpenedChat] = useState(null)
     const {theme} = useContext(ThemeContext)
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     useEffect(() => {
          const handleResize = () => setWindowWidth(window.innerWidth);
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
     }, []);

     return (
          <div className={`flex w-screen h-screen ${theme == "dark" ? 'chats-black':'chats-white'}`}>
               {(!openedChat || windowWidth >= 920 ) && 
                    <div className={`lg:block h-screen border ${theme === "dark" ? "border-[#303030]": "border-[#DADCE0]"}`}>
                         <Toolbar/>
                         <ChatList setOpenedChat={setOpenedChat}/>
                    </div>
               }
               {
                    openedChat && <ChatSection openedChat={openedChat}/>
               }
          </div>
     )
}
export default Chats; 