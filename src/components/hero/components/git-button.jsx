import PropTypes from "prop-types"
import { LuGithub } from "react-icons/lu"

const GitButton = ({ primary }) => {
    return ( 
        <button 
            className={`github-button hover:bg-btn-secondary hover:text-white ${primary ? 'bg-btn-primary' : 'bg-btn-secondary text-white hover:bg-btn-primary'}`}
        >
            <span>
                github
            </span>
            <LuGithub size={16} strokeWidth={3} />
        </button>
     );
}

GitButton.propTypes = {
    primary: PropTypes.bool
}

GitButton.defaultProps = {
    primary: false
}
 
export default GitButton;