import { useTeamStore } from "../../store/useTeamStore";
import TeamMemberItem from "./components/team-member-item";

const Team = () => {
  const { teamData } = useTeamStore();
  console.log(teamData.people);

  return (
    <div className="mb-[112px] mt-[106px] space-y-[90px] px-[27.5px] lg:px-64">
      <h2 className="text-3xl text-center mx-auto text-primary lg:w-[513px] font-subtitle py-4 border-b-2 border-primary dark:text-white-two dark:border-white-two">Desenvolvedores Frontend</h2>
      {teamData?.people?.map( person => (
        <TeamMemberItem key={person.id} person={person} />
      ))}
    </div>
  );
};

export default Team;
