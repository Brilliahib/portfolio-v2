import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import Typography from "@/components/atoms/typography/Typography";
import { CheckSquare, Square } from "lucide-react";

const dreamCampus = [
  {
    title: "Computer Science, Gadjah Mada University",
    description: "The dream I once chased but couldn’t reach.",
    done: false,
  },
  {
    title: "Computer Engineering, Diponegoro University",
    description:
      "Where I found real growth, opportunities, and unforgettable achievements.",
    done: true,
  },
];

export default function PersonalDream() {
  return (
    <SectionWrapper>
      <div className="space-y-4">
        <Typography
          title="The Dream That Slipped Away"
          description="I didn’t reach my dream campus, but the one I’m in now has given me lessons and growth I never expected."
        />

        <div className="space-y-1 py-4">
          {dreamCampus.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              {item.done ? (
                <CheckSquare size={16} className="mt-1 flex shrink-0" />
              ) : (
                <Square size={16} className="mt-1 flex shrink-0" />
              )}
              <div>
                <span className="text-sm font-medium">{item.title}</span>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="tracking-tight text-muted-foreground">
          Even though I didn&rsquo;t reach my dream university, at Diponegoro
          University I&rsquo;ve grown so much, achieved great things, and
          I&rsquo;m proud to be part of{" "}
          <span className="text-foreground">Temcy</span>!
        </p>
      </div>
    </SectionWrapper>
  );
}
