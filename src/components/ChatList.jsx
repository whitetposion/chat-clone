import { useState, useContext, useEffect, useRef, useCallback } from "react"
import { ThemeContext } from "../context/themecontext"
import Avatar from "./Avatar"
import fetchChats from "../api/get_all_messages"

const ChatList = ({
  setOpenedChat
}) => {
     const [chats, setChats] = useState([]);
     const [page, setPage] = useState(1);
     const [loading, setLoading] = useState(false);
     const [hasMore, setHasMore] = useState(true);
     const {theme} = useContext(ThemeContext);

     const observer = useRef();

     const lastChatElementRef = useCallback(node => {
          if (loading) return;
          if (observer.current) observer.current.disconnect();
          observer.current = new IntersectionObserver(entries => {
               if (entries[0].isIntersecting && hasMore) {
               setPage(prevPage => prevPage + 1);
               }
          });
          if (node) observer.current.observe(node);
     }, [loading, hasMore]);

     useEffect(() => {
      const getChats = async () => {
        setLoading(true);
        const data = await fetchChats(page);
        if (data) {
          setChats(prevChats => [...prevChats, ...data.data]);
          setHasMore(data.data.length > 0);
        } else {
          setHasMore(false);
        }
        setLoading(false);
      };
  
      getChats();
    }, [page]);
     return (
          <div className={`scrollbar lg:w-1/4 lg:min-w-[400px] overflow-y-auto break:w-full flex flex-col h-[92%] pt-6 ${theme == "dark" ? 'bg-[#212121]':'bg-white'}`}>
               {chats.map((chat, index)=>{
                    const firstName  = chat?.creator?.name ? chat.creator.name : chat.creator.country.code
                    return(
                    <div 
                      key={index} 
                      className="cursor-pointer h-[100px] w-full flex justify-between items-center bg-transparent px-4"
                      ref={chats.length === index + 1 ? lastChatElementRef : null}
                      onClick ={()=>setOpenedChat(chat.id)}
                    >
                         <Avatar firstName={firstName} />
                         <div className="flex-1 mx-2">
                              <div className={`text-[16px] overflow-hidden font-semibold ${theme === "dark" ? "text-white": "text-black"}`}>
                                   {
                                        chat.creator.name ? chat.creator.name : chat.creator.city
                                   }
                              </div>
                              <div className={`text-[14px] overflow-hidden font-normal ${theme === "dark" ? "text-[#A2A2A2]": "text-[#707579]"}`}>
                                   {
                                        chat.creator.phone ? chat.creator.phone : "Contact info not available"
                                   }
                              </div>
                         </div>
                         <div className="w-20px flex flex-col items-end">
                              <div className={`text-[12px] overflow-hidden font-normal ${theme === "dark" ? "text-[#686C6E]": "text-[#686C87]"}`}>
                                   Jun 11
                              </div>
                              <div className={`text-center h-[25px] w-[25px] flex justify-center items-center font-medium text-[14px] rounded-full 
                                   ${theme === "dark" ? "text-white bg-[#8774E1]": "text-white bg-[#00C73E]"}
                                   `}>
                                   {chat && chat.msg_count}
                              </div>
                         </div>
                    </div>
               )})}
          </div>
     )
}

export default ChatList
