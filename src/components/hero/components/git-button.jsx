import { LuGithub } from "react-icons/lu"

const GitButton = () => {
    return ( 
        <button 
            className="github-button hover:bg-btn-secondary hover:text-white bg-btn-primary"
        >
            <span>
                github
            </span>
            <LuGithub size={16} strokeWidth={3} />
        </button>
     );
}
 
export default GitButton;