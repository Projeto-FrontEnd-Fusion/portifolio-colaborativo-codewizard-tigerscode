import { LuGithub } from "react-icons/lu"

const GitButton = () => {
    return ( 
        <button 
            className="github-button hover:bg-button-secondary-bg hover:text-white bg-button-primary-bg"
        >
            <span>
                github
            </span>
            <LuGithub size={16} strokeWidth={3} />
        </button>
     );
}
 
export default GitButton;