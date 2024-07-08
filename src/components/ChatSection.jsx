import Avatar from "./Avatar"
import Messages from "./Messages"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/themecontext"
import { ArrowLeft } from "lucide-react"
import chatsById from "../api/get_chats_by_id"


const ChatSection = ({
     openedChat
}) => {
     const [chats, setChats] = useState([])
     useEffect(()=>{
          const getChats = async () =>{
               const response = await chatsById(openedChat)
               console.log(response)
               setChats(response)
          }
          getChats()
     },[openedChat])
     const { theme } = useContext(ThemeContext)
     return (
          <div className={`flex-1 h-full`}>
               <div className={`h-[8%] w-full flex items-center ${theme === "dark" ? "bg-[#212121]" :"bg-white"}`}>
                    <div className={`break:hidden ${theme === "dark" ? "text-white" : "text-[#212121]"}`}>
                         <ArrowLeft/>
                    </div>
                    <div className="ml-4 h-full flex justify-start items-center">
                         <Avatar firstName={"abhishek"}/>
                        <div className="ml-2 flex flex-col justify-center">
                              <h4 className={`text-[18px] text-end font-semibold ${theme === "dark" ? "text-white": "text-black"}`}>
                                   Abhishek
                              </h4>
                              <span className={`text-[14px] text-start leading-5 ${theme === "dark" ? "text-[#A2A2A2]": "text-[#707579]"}`}>
                                   number
                              </span>
                        </div>
                    </div>
               </div>
               <div className="overflow-y-auto h-[92%] scrollbar">
                    <Messages data ={chats}/>
               </div>
          </div>
     )
}

export default ChatSection
