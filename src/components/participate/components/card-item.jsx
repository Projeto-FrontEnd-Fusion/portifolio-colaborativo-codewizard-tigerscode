import PropTypes from "prop-types";

const CardItem = ({ emoji, title, text }) => {
  return (
    <div className="flex flex-col rounded-lg bg-[#7676764D] p-8 sm:min-w-[364px] lg:flex-row lg:gap-8">
      <p className="mb-6 text-5xl lg:text-[64px]">{emoji}</p>
      <div>
        <h3 className="font-body text-sm font-bold leading-normal text-primary lg:text-[18px]">
          {title}:
        </h3>
        <p className="font-body text-sm leading-normal text-primary lg:text-[18px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CardItem;

CardItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
