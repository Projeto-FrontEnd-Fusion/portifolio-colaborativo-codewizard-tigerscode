import PropTypes from "prop-types";
import { LuGithub } from "react-icons/lu";

const GitButton = ({ primary }) => {
  return (
    <button 
      className={`w-32 h-12 rounded-lg flex items-center justify-center cursor-pointer font-body-two text-[16px] font-bold github-button hover:text-white ${primary ? "bg-btn-primary hover:bg-btn-secondary" : "bg-btn-secondary text-white hover:bg-btn-primary"}`}
    >
      <a 
        href="https://github.com/Projeto-FrontEnd-Fusion/portifolio-colaborativo-codewizard-tigerscode" 
        target="_blank" 
        rel="nofollow" 
        className="flex items-center gap-[10px]"
      >
        <span>github</span>
        <LuGithub size={16} strokeWidth={3} />
      </a>
    </button>
  );
};

GitButton.propTypes = {
  primary: PropTypes.bool,
};

GitButton.defaultProps = {
  primary: false,
};

export default GitButton;
