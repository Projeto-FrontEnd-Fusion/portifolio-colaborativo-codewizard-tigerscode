import PropTypes from "prop-types";
import { SlSocialFacebook } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { useState } from "react";
import ProjectItem from "./project-item";
import ToggleSectionButton from "./toggle-section-button";
import SocialMediaButton from "./social-media-button";

const TeamMemberItem = ({ person }) => {
  const [isProjectsSectionOpen, setIsProjectsSectionOpen] = useState(false);
  const [isAbilitiesSectionOpen, setIsAbilitiesSectionOpen] = useState(false);

  const handleProjectsButtonClick = () => {
    setIsProjectsSectionOpen(!isProjectsSectionOpen);
    setIsAbilitiesSectionOpen(false);
  };
  const handleAbilitiesButtonClick = () => {
    setIsAbilitiesSectionOpen(!isAbilitiesSectionOpen);
    setIsProjectsSectionOpen(false);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-[150px] w-[150px]">
        <img
          src={`${person.githubImgUrl}`}
          alt={person.name}
          className="h-full w-full rounded-2xl object-cover"
          loading="lazy"
        />
      </div>

      <h2 className="text-center font-subtitle text-[38px] text-primary">
        {person.name}
      </h2>

      <h3 className="font-body text-[22px] text-primary">{person.subTitle}</h3>

      <div className="flex gap-4">
        {person.githubUrl && (
          <SocialMediaButton url={person.githubUrl}>
            <VscGithubAlt color="#FFF" />
          </SocialMediaButton>
        )}
        {person.linkedinUrl && (
          <SocialMediaButton url={person.linkedinUrl}>
            <CiLinkedin color="#FFF" />
          </SocialMediaButton>
        )}
        {person.instagramUrl && (
          <SocialMediaButton url={person.instagramUrl}>
            <IoLogoInstagram color="#FFF" />
          </SocialMediaButton>
        )}
        {person.facebookUrl && (
          <SocialMediaButton url={person.facebookUrl}>
            <SlSocialFacebook color="#FFF" />
          </SocialMediaButton>
        )}
      </div>

      <p className="text-center font-body">{person.text}</p>

      <div className="flex gap-2">
        <ToggleSectionButton
          isActive={isProjectsSectionOpen}
          handleToggleSectionClick={handleProjectsButtonClick}
        >
          Projetos Recentes
        </ToggleSectionButton>
        <ToggleSectionButton
          isActive={isAbilitiesSectionOpen}
          handleToggleSectionClick={handleAbilitiesButtonClick}
        >
          Habilidades
        </ToggleSectionButton>
      </div>

      <div className="flex flex-row gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {isProjectsSectionOpen &&
          person.projects.map((project) => (
            <ProjectItem key={project.id} imgUrl={project.projectUrl} />
          ))}

        {isAbilitiesSectionOpen && <p>Habilidades</p>}
      </div>
    </div>
  );
};

export default TeamMemberItem;

TeamMemberItem.propTypes = {
  person: PropTypes.shape({
    githubImgUrl: PropTypes.string,
    name: PropTypes.string,
    subTitle: PropTypes.string,
    githubUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
    instagramUrl: PropTypes.string,
    facebookUrl: PropTypes.string,
    text: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
