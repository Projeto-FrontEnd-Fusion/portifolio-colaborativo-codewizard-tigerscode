import { LuMenu, LuSunMoon } from "react-icons/lu"
import GitButton from "./git-button";

const Header = () => {
    return ( 
        <header 
            className="flex items-center justify-between px-4 h-24 bg-[#0F0920]"
        >
            <GitButton />
            
            <div className="flex justify-center items-center gap-3">
                
                <button className="text-white-two hover:text-gray-text">
                    <LuSunMoon size={24} />
                </button>
                <button className="text-white-two hover:text-gray-text">
                    <LuMenu size={36}/>
                </button>
            </div>
        </header>
     );
}
 
export default Header;