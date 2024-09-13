import PropTypes from "prop-types";

const ProjectItem = ({ imgUrl }) => {
  return (
    <div className="h-[210px] w-[303px] rounded-lg">
      <img
        src={imgUrl}
        alt="Projetos Recentes"
        className="h-full w-full rounded-lg object-cover"
      />
    </div>
  );
};

export default ProjectItem;

ProjectItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
