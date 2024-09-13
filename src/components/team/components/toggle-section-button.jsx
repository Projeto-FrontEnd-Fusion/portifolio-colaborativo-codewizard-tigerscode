import PropTypes from "prop-types";

const ToggleSectionButton = ({ children, handleToggleSectionClick }) => {
    return ( 
        <button className={`h-[35px] min-h-[35px] w-auto min-w-[154px] rounded-[4px] bg-btn-primary px-2 font-subtitle text-white hover:bg-btn-secondary`} onClick={handleToggleSectionClick} >
            {children}
        </button>
     );
}
 
export default ToggleSectionButton;

ToggleSectionButton.propTypes = {
    children: PropTypes.node,
    handleToggleSectionClick: PropTypes.func,
};