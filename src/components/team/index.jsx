import { useTeamStore } from "../../store/useTeamStore";
import TeamMemberItem from "./components/team-member-item";

const Team = () => {
  const { teamData } = useTeamStore();
  console.log(teamData.people);

  return (
    <div className="mb-[112px] mt-[106px] space-y-[90px] px-[27.5px]">
      {teamData?.people?.map( person => (
        <TeamMemberItem key={person.id} person={person} />
      ))}
    </div>
  );
};

export default Team;
