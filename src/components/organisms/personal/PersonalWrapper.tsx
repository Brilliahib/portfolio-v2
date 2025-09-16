import PersonalHeading from "./PersonalHeading";
import PersonalInspiration from "./PersonalInspiration";
import PersonalPlaylist from "./PersonalPlaylist";

export default function PersonalWrapper() {
  return (
    <div className="space-y-12">
      <PersonalHeading />
      <PersonalInspiration />
      <PersonalPlaylist />
    </div>
  );
}
