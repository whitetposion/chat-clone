import { useContext, useState, useEffect } from "react";
import Toolbar from "../components/Toolbar";
import { ThemeContext } from "../context/themecontext";
import "./chats.css"
import ChatList from "../components/ChatList";
import ChatSection from "../components/ChatSection";
import SideDrawer from "../components/Sidedrawer/Sidedrawer";
import { Moon, Sun, X } from "lucide-react";
const Chats = () =>{
     
     const [openedChat, setOpenedChat] = useState(null)
     const [drawerOpen, setDrawerOpen] = useState(false)
     const {theme, toggleTheme} = useContext(ThemeContext)
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     const toggleDrawer = () => {
          setDrawerOpen(prev => !prev);
     };
      

     useEffect(() => {
          const handleResize = () => setWindowWidth(window.innerWidth);
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
     }, []);

     return (
          <div className={`flex w-screen h-screen ${theme == "dark" ? 'chats-black':'chats-white'}`}>
               <SideDrawer show={drawerOpen} onClose={toggleDrawer}>
                    <div className="absolute top-4 right-2">
                        <X 
                         onClick={toggleDrawer}
                         className={`${theme === "dark" ? "text-white" : "text-[#212121]"}`}
                         /> 
                    </div>
                    <div
                         className={`mt-16 px-4 relative flex justify-between`}
                    >
                         <span className={`${theme === "dark" ? "text-white" : "text-[#212121]"}`} >Night mode</span>
                    {theme === "dark" ? (
                         <Moon
                              size={20}
                              className={`${theme === "dark" ? "text-white" : "text-[#212121]"}`}
                              onClick={toggleTheme}
                         />
                    ) : (
                         <Sun
                              onClick={toggleTheme}
                              size={20}
                              className={`${theme === "dark" ? "text-white" : "text-[#212121]"}`}
                         />
                    )}
                    </div>
               </SideDrawer>
               {(!openedChat || windowWidth >= 920 ) && 
                    <div className={`lg:block h-screen border ${theme === "dark" ? "border-[#303030]": "border-[#DADCE0]"}`}>
                         <Toolbar toggleDrawer={toggleDrawer}/>
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