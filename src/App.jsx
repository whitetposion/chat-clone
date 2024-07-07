import { useContext } from "react"
import Chats from "./pages/Chats"
import { ThemeContext } from "./context/themecontext"


const App = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className = {`w-screen h-screen ${theme == "dark" ? 'bg-[#212121]':'bg-white'}`}>
            <Chats/>
        </div>
    )
}

export default App
