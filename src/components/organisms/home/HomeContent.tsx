import HomeAbout from "./HomeAbout";
import HomeAwards from "./HomeAwards";
import HomeExperience from "./HomeExperience";
import HomeJumbotron from "./HomeJumbotron";
import HomeProject from "./HomeProject";
import HomeWriting from "./HomeWriting";

export default function HomeContent() {
  return (
    <>
      <section>
        <div className="w-full">
          <HomeJumbotron />
          <HomeAbout />
          <HomeExperience />
          <HomeAwards />
          <HomeProject />
          <HomeWriting />
        </div>
      </section>
    </>
  );
}
