import PropTypes from "prop-types";

const SocialMediaButton = ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#454343] transition-all duration-500 hover:scale-105 hover:bg-primary dark:bg-btn-primary"
    >
      {children}
    </a>
  );
};

export default SocialMediaButton;

SocialMediaButton.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
