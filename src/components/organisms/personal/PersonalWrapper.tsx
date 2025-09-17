import PersonalChaosList from "./PersonalChaosList";
import PersonalDream from "./PersonalDream";
import PersonalHeading from "./PersonalHeading";
import PersonalInspiration from "./PersonalInspiration";
import PersonalLove from "./PersonalLove";
import PersonalPlaylist from "./PersonalPlaylist";

export default function PersonalWrapper() {
  return (
    <div className="space-y-20 md:space-y-24">
      <PersonalHeading />
      <PersonalLove />
      <PersonalDream />
      <PersonalInspiration />
      <PersonalChaosList />
      <PersonalPlaylist />
    </div>
  );
}
