import PropTypes from "prop-types";

const ProjectItem = ({ imgUrl }) => {
    return ( 
        <div className="w-[303px] h-[210px] rounded-lg">
            <img src={imgUrl} alt="Projetos Recentes" className="rounded-lg object-cover w-full h-full" />
        </div>
     );
}
 
export default ProjectItem;

ProjectItem.propTypes = {
    imgUrl: PropTypes.string,
};