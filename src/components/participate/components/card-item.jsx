import PropTypes from "prop-types";

const CardItem = ({emoji, title, text}) => {
    return ( 
        <div className="p-8 bg-[#7676764D] rounded-lg">
            <p className="text-5xl mb-6">{emoji}</p>
            <h3 className="font-body text-sm font-bold text-primary">{title}:</h3>
            <p className="font-body text-sm text-primary">{text}</p>
        </div>
     );
}
 
export default CardItem;

CardItem.propTypes = {
    emoji: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}