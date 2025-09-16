import SpotifyEmbed from "@/components/atoms/embed/SpotifyEmbed";
import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import Typography from "@/components/atoms/typography/Typography";

export default function PersonalPlaylist() {
  return (
    <SectionWrapper>
      <div className="space-y-4">
        <Typography
          title="Top Tracks"
          description="Here's my personal playlist that I usually listen to when I'm working or coding. Enjoy the vibes!"
        />
        <SpotifyEmbed url="https://open.spotify.com/embed/playlist/7GwJgDWCbevRSEYXkCRDQG?utm_source=generator" />
      </div>
    </SectionWrapper>
  );
}
