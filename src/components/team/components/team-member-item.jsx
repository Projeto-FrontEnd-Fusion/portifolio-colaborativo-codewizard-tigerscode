import PropType from "prop-types";
import { SlSocialFacebook } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { useState } from "react";
import ProjectItem from "./project-item";
import ToggleSectionButton from "./toggle-section-button";

const TeamMemberItem = ({ person }) => {
    const [isProjectsSectionOpen, setIsProjectsSectionOpen] = useState(false);
    const [isAbilitiesSectionOpen, setIsAbilitiesSectionOpen] = useState(false);

    const handleProjectsButtonClick = () => {
        setIsProjectsSectionOpen(!isProjectsSectionOpen);
        setIsAbilitiesSectionOpen(false);
    };
    const handleAbilitiesButtonClick = () => {
        isAbilitiesSectionOpen(!isAbilitiesSectionOpen);
        setIsProjectsSectionOpen(false);
    };
    return ( 
        <div className="flex flex-col items-center gap-4">
          <div className="h-[150px] w-[150px]">
            <img
              src={`${person.githubImgUrl}`}
              alt={person.name}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          <h2 className="text-center font-subtitle text-[38px] text-primary">
            {person.name}
          </h2>

          <h3 className="font-body text-[22px] text-primary">
            {person.subTitle}
          </h3>

          <div className="flex gap-4">
            {person.githubUrl && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#454343]">
                <VscGithubAlt color="#FFF" />
              </div>
            )}
            {person.linkedinUrl && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#454343]">
                <CiLinkedin color="#FFF" />
              </div>
            )}
            {person.instagramUrl && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#454343]">
                <IoLogoInstagram color="#FFF" />
              </div>
            )}
            {person.facebookUrl && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#454343]">
                <SlSocialFacebook color="#FFF" />
              </div>
            )}
          </div>

          <p className="text-center font-body">{person.text}</p>

          <div className="flex gap-2">
            <ToggleSectionButton handleToggleSectionClick={handleProjectsButtonClick}>
              Projetos Recentes
            </ToggleSectionButton>
            <ToggleSectionButton onClick={handleAbilitiesButtonClick}>
              Habilidades
            </ToggleSectionButton>
          </div>
          
          <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {
              isProjectsSectionOpen && (
                  person.projects.map(project => (
                    <ProjectItem key={project.id} imgUrl={project.projectUrl} />
                  ))
              )
            }
          </div>
        </div>
     );
}
 
export default TeamMemberItem;

TeamMemberItem.propTypes = {
    person: PropType.shape ({
        githubImgUrl: PropType.string,
        name: PropType.string,
        subTitle: PropType.string,
        githubUrl: PropType.string,
        linkedinUrl: PropType.string,
        instagramUrl: PropType.string,
        facebookUrl: PropType.string,
        text: PropType.string,
        projects: PropType.arrayOf(PropType.string)
    }).isRequired,
}