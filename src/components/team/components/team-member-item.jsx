import PropTypes from "prop-types";
import { SlSocialFacebook } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { useState } from "react";
import ProjectItem from "./project-item";
import ToggleSectionButton from "./toggle-section-button";
import SocialMediaButton from "./social-media-button";
import { teamMemberSkills } from "../constants/team-member-skills";

const TeamMemberItem = ({ person }) => {
  const [isProjectsSectionOpen, setIsProjectsSectionOpen] = useState(false);
  const [isSkillsSectionOpen, setIsSkillsSectionOpen] = useState(false);

  const firstName = person.name.split(" ")[0];
  const secondName = person.name.split(" ")[1];
  const memberSkills = teamMemberSkills.find(member => member.name === firstName);

  const handleProjectsButtonClick = () => {
    setIsProjectsSectionOpen(!isProjectsSectionOpen);
    setIsSkillsSectionOpen(false);
  };
  const handleAbilitiesButtonClick = () => {
    setIsSkillsSectionOpen(!isSkillsSectionOpen);
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

      <h2 className="text-center font-subtitle text-[38px] text-primary dark:text-[#03FCFC]">
        {firstName} {secondName}
      </h2>

      <h3 className="font-body text-[22px] text-primary dark:text-white-two">{person.subTitle}</h3>

      <div className="flex gap-4">
        {person.githubUrl && (
          <SocialMediaButton url={person.githubUrl}>
            <VscGithubAlt className="text-white dark:text-primary" />
          </SocialMediaButton>
        )}
        {person.linkedinUrl && (
          <SocialMediaButton url={person.linkedinUrl}>
            <CiLinkedin className="text-white dark:text-primary" />
          </SocialMediaButton>
        )}
        {person.instagramUrl && (
          <SocialMediaButton url={person.instagramUrl}>
            <IoLogoInstagram className="text-white dark:text-primary" />
          </SocialMediaButton>
        )}
        {person.facebookUrl && (
          <SocialMediaButton url={person.facebookUrl}>
            <SlSocialFacebook className="text-white dark:text-primary" />
          </SocialMediaButton>
        )}
      </div>

      <p className="text-center font-body text-primary-muted dark:text-white-two">{person.text}</p>

      <div className="flex gap-2">
        <ToggleSectionButton
          isActive={isProjectsSectionOpen}
          handleToggleSectionClick={handleProjectsButtonClick}
        >
          Projetos Recentes
        </ToggleSectionButton>
        <ToggleSectionButton
          isActive={isSkillsSectionOpen}
          handleToggleSectionClick={handleAbilitiesButtonClick}
        >
          Habilidades
        </ToggleSectionButton>
      </div>

      <div className="flex w-full gap-3 overflow-x-scroll scroll-smooth snap-x [&::-webkit-scrollbar]:hidden">
        {isProjectsSectionOpen && (
           person.projects.length > 0 ? (
            person.projects.map((project) => (
              <ProjectItem key={project.id} imgUrl={project.projectUrl} />
            ))
            ) : (
            <div className="h-[210px] min-w-full rounded-lg flex items-center justify-center bg-gray-300 text-gray-400 font-semibold">
              Ainda não há projetos
            </div>
        )
        )}

        {isSkillsSectionOpen && memberSkills && memberSkills.skills.map(skill => (
          <div key={skill.name} className=" flex items-center min-w-40 justify-center gap-2 h-12 text-nowrap w-auto rounded-full dark:bg-primary-muted bg-primary text-white" >
            <img src={skill.icon} alt={skill.name} className="h-8 w-8" />
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
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
