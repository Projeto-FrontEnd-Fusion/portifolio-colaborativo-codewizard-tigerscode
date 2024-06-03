import { LuMenu } from "react-icons/lu"
import GitButton from "./git-button";
import ThemeToggle from "./theme-toggle";

const Header = () => {
    return ( 
        <header 
            className="flex items-center justify-between px-4 h-24"
        >
            <GitButton />
            
            <div className="flex justify-center items-center gap-3">
                <ThemeToggle />
                <button className="dark:text-white-two hover:text-gray-text text-black">
                    <LuMenu size={36}/>
                </button>
            </div>
        </header>
     );
}
 
export default Header;