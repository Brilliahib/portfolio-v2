import HomeAbout from "./HomeAbout";
import HomeExperience from "./HomeExperience";
import HomeJumbotron from "./HomeJumbotron";
import HomeProject from "./HomeProject";

export default function HomeContent() {
  return (
    <>
      <main className="w-full flex justify-center py-32 px-5 sm:px-0" id="home">
        <div className="w-full max-w-sm">
          <div className="md:space-y-16 space-y-8">
            <HomeJumbotron />
            <HomeAbout />
            <HomeExperience />
            <HomeProject />
          </div>
        </div>
      </main>
    </>
  );
}