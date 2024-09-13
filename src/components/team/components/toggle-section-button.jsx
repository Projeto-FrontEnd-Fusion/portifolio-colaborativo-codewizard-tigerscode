import PropTypes from "prop-types";

const ToggleSectionButton = ({ children, handleToggleSectionClick, isActive }) => {
  return (
    <button
      className={`h-[35px] min-h-[35px] w-auto min-w-[154px] rounded-[4px] bg-btn-primary px-2 font-subtitle text-white transition-colors duration-500 hover:bg-btn-secondary ${isActive && "bg-primary"}`}
      onClick={handleToggleSectionClick}
    >
      {children}
    </button>
  );
};

export default ToggleSectionButton;

ToggleSectionButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleToggleSectionClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
