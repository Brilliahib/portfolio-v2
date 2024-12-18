import HomeAbout from "./HomeAbout";
import HomeExperience from "./HomeExperience";
import HomeJumbotron from "./HomeJumbotron";
import HomeProject from "./HomeProject";

export default function HomeContent() {
  return (
    <>
      <section>
        <div className="w-full max-w-sm">
          <HomeJumbotron />
          <HomeAbout />
          <HomeExperience />
          <HomeProject />
        </div>
      </section>
    </>
  );
}
