import { ArrowRight, Menu, Search, X } from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/themecontext";

const Toolbar = ({
     toggleDrawer
}) => {
     const { theme } = useContext(ThemeContext);
     const [inputStates, setInputState] = useState({
          isBack: false,
          isSelected: false,
          isCross: false,
     });

     const [inputValue, setInputValue] = useState('');

     const handleFocus = () => {
          setInputState({ ...inputStates, isSelected: true, isBack:true });
     };

     const handleBlur = () => {
          setInputState({ ...inputStates, isSelected: false });
     };

     const handleToggleBack = () => {
          setInputValue("")
          setInputState({ ...inputStates, isBack: !inputStates.isBack, isSelected: false, isCross: false});
     };

     const handleInputChange = (e) => {
          const value = e.target.value;
          setInputValue(value);
          setInputState({ ...inputStates, isCross: value.length > 0});
     };


     return (
          <div className={`lg:w-1/4 lg:min-w-[400px] break:w-full flex w-full h-[8%] px-6 justify-start items-center ${theme == "dark" ? 'bg-[#212121]':'bg-white'}`}>
               <div
                    className={`transition-transform transform ${inputStates.isBack ? "rotate-180" : "rotate-0"}`}
               >
               {!inputStates.isBack ? (
                    <Menu
                         size={20}
                         className={`${theme === "dark" ? "text-white" : "text-[#212121]"}`}
                         onClick={toggleDrawer}
                    />
               ) : (
                    <ArrowRight
                         onClick={handleToggleBack}
                         size={20}
                         className={`${theme === "dark" ? "text-white" : "text-[#212121]"}`}
                    />
               )}
               </div>
               <div
               className={`ml-3 h-[80%] flex-1 px-4 flex justify-start items-center rounded-full border-2 transition-colors ${
                    inputStates.isSelected
                    ? "border-[#8774E1]"
                    : theme === "dark"
                    ? "border-transparent bg-[#2C2C2C]"
                    : "border-transparent bg-[#F4F4F5]"
               }`}
               >
               <Search
                    size={18}
                    className={`transition-colors ${
                    inputStates.isSelected
                    ? "text-[#8774E1]"
                    : theme === "dark"
                    ? "text-[#6B6B6B]"
                    : "text-[#6B6B6B]"
                    }`}
               />
               <input
                    placeholder="Search"
                    className={`ml-3 flex-1 bg-transparent outline-none caret-[#3B94EC] caret-w-[1px] ${
                    theme === "dark" ? "text-white" : "text-[#212121]"
                    }`}
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
               />
               {inputStates.isCross && (
                    <X
                    size={20}
                    className={`cursor-pointer transition-colors ${
                         theme === "dark"
                         ? "text-[#A2ACAB]"
                         : "text-[#212121]"
                    }`}
                    onClick={handleToggleBack}
                    />
               )}
               </div>
          </div>
     );
};

export default Toolbar;
