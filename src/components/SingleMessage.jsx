import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";

const ChatMessage = ({ message, isSender }) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`overflow-x-hidden whitespace-break-spaces flex ${isSender ? 'justify-end' : 'justify-start'} my-2`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg ${theme === "dark" ? 'bg-[#212121] text-white' : 'bg-white text-black'}`}>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
