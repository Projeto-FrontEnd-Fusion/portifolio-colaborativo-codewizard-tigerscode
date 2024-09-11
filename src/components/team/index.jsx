import { SlSocialFacebook } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { useTeamStore } from "../../store/useTeamStore";

const Team = () => {
    const { teamData } = useTeamStore();
    console.log(teamData.people)

    return ( 
        <div className="mt-[106px] mb-[112px] space-y-[90px] px-[27.5px]">
            {
                teamData?.people?.map((person, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <div className="h-[150px] w-[150px]">
                            <img src={`${person.githubImgUrl}`} alt={person.name} className="h-full w-full object-cover rounded-2xl" />
                        </div>   

                        <h2 className="text-[38px] text-center font-subtitle text-primary">{person.name}</h2>

                        <h3 className="text-[22px] font-body text-primary">{person.subTitle}</h3>   

                        <div className="flex gap-4">
                            {
                                person.githubUrl && (
                                    <div className="w-12 h-12 bg-[#454343] rounded-full flex items-center justify-center">
                                        <VscGithubAlt color="#FFF" />
                                    </div>

                                )
                            }
                            {
                                person.linkedinUrl && (
                                    <div className="w-12 h-12 bg-[#454343] rounded-full flex items-center justify-center">
                                        <CiLinkedin color="#FFF" />
                                    </div>

                                )
                            }
                            {
                                person.instagramUrl && (
                                    <div className="w-12 h-12 bg-[#454343] rounded-full flex items-center justify-center">
                                        <IoLogoInstagram color="#FFF" />
                                    </div>

                                )
                            }
                            {
                                person.facebookUrl && (
                                    <div className="w-12 h-12 bg-[#454343] rounded-full flex items-center justify-center">
                                        <SlSocialFacebook color="#FFF" />
                                    </div>

                                )
                            }
                        </div>

                        <p className="text-center font-body">{person.text}</p>   

                        <div className="flex gap-2">
                            <button className="bg-btn-primary min-w-[154px] min-h-[35px] w-auto h-[35px] text-white font-subtitle rounded-[4px] px-2">
                                Projetos Recentes
                            </button>
                            <button className="bg-btn-primary min-w-[154px] min-h-[35px] w-auto h-[35px] text-white font-subtitle rounded-[4px]">
                                Habilidades
                            </button>
                        </div>       
                    </div>
                ))
            }
        </div>
     );
}
 
export default Team;