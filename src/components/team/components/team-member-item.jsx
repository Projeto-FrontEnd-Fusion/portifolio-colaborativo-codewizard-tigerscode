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
  const memberSkills = teamMemberSkills.find(
    (member) => member.name === firstName,
  );

  const handleProjectsButtonClick = () => {
    setIsProjectsSectionOpen(!isProjectsSectionOpen);
    setIsSkillsSectionOpen(false);
  };
  const handleAbilitiesButtonClick = () => {
    setIsSkillsSectionOpen(!isSkillsSectionOpen);
    setIsProjectsSectionOpen(false);
  };
  return (
    <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-16">
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-x-8">
        <div className="h-[150px] w-[150px] lg:min-h-[256px] lg:min-w-[256px]">
          <img
            src={`${person.githubImgUrl}`}
            alt={person.name}
            className="h-full w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center gap-4 lg:max-h-60 lg:items-start">
          <h2 className="text-center font-subtitle text-[38px] text-primary dark:text-[#03FCFC]">
            {firstName} {secondName}
          </h2>
          <h3 className="font-body text-[22px] text-primary dark:text-white-two">
            {person.subTitle}
          </h3>

          <div className="flex gap-4">
            {person.githubUrl && (
              <SocialMediaButton url={person.githubUrl}>
                <VscGithubAlt className="text-white lg:size-5 dark:text-primary" />
              </SocialMediaButton>
            )}
            {person.linkedinUrl && (
              <SocialMediaButton url={person.linkedinUrl}>
                <CiLinkedin className="text-white lg:size-5 dark:text-primary" />
              </SocialMediaButton>
            )}
            {person.instagramUrl && (
              <SocialMediaButton url={person.instagramUrl}>
                <IoLogoInstagram className="text-white lg:size-5 dark:text-primary" />
              </SocialMediaButton>
            )}
            {person.facebookUrl && (
              <SocialMediaButton url={person.facebookUrl}>
                <SlSocialFacebook className="text-white lg:size-5 dark:text-primary" />
              </SocialMediaButton>
            )}
          </div>
          <p className="overflow-clip text-ellipsis text-center font-body text-primary-muted lg:text-left lg:text-lg lg:leading-none dark:text-white-two">
            {person.text}
          </p>
        </div>
      </div>

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

      <div className="flex w-full snap-x gap-3 overflow-x-scroll scroll-smooth lg:flex-wrap lg:justify-between lg:gap-y-8 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        {isProjectsSectionOpen &&
          (person.projects.length > 0 ? (
            person.projects.map((project) => (
              <ProjectItem key={project.id} imgUrl={project.projectUrl} />
            ))
          ) : (
            <div className="flex h-[210px] min-w-full items-center justify-center rounded-lg bg-gray-300 font-semibold text-gray-400">
              Ainda não há projetos
            </div>
          ))}

        {isSkillsSectionOpen &&
          memberSkills &&
          memberSkills.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex h-12 w-auto min-w-40 items-center justify-center gap-2 text-nowrap rounded-full bg-primary-muted text-white transition-colors duration-500 hover:bg-[#454343]"
            >
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
