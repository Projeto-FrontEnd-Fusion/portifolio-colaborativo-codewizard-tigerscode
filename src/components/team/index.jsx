import { useTeamStore } from "../../store/useTeamStore";
import TeamMemberItem from "./components/team-member-item";

const Team = () => {
  const { teamData } = useTeamStore();

  return (
    <div className="mb-[112px] mt-[106px] space-y-[90px] px-[27.5px] lg:px-64" id="team">
      <h2 className="mx-auto border-b-2 border-primary py-4 text-center font-subtitle text-3xl text-primary lg:w-[513px] dark:border-white-two dark:text-white-two">
        Desenvolvedores Frontend
      </h2>
      {teamData?.people?.map((person, index) => (
        <TeamMemberItem key={index} person={person} />
      ))}
    </div>
  );
};

export default Team;
