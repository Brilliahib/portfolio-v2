import HomeAbout from "./HomeAbout";
import HomeExperience from "./HomeExperience";
import HomeFooter from "./HomeFooter";
import HomeJumbotron from "./HomeJumbotron";
import HomeProject from "./HomeProject";

export default function HomeContent() {
  return (
    <>
      <main
        className="w-full flex justify-center pt-32 pb-12 px-5 sm:px-0"
        id="home"
      >
        <div className="w-full max-w-sm">
          <HomeJumbotron />
          <HomeAbout />
          <HomeExperience />
          <HomeProject />
          <HomeFooter />
        </div>
      </main>
    </>
  );
}
