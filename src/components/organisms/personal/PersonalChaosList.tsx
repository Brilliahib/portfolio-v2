import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import Typography from "@/components/atoms/typography/Typography";
import { CheckSquare, Square } from "lucide-react";

const chaosList = [
  {
    title: "Win an international competition",
    description: "big milestone, proud moment.",
    done: true,
  },
  {
    title: "Buy a new monitor with coding income",
    description: "better screen, better code.",
    done: true,
  },
  {
    title: "Build My Own Startup",
    description: "from small ideas to something that can change lives.",
    done: false,
  },
  {
    title: "Build an impactful app for society",
    description: "something that changes habits for the better.",
    done: false,
  },

  {
    title: "Upgrade to a MacBook",
    description: "still saving up for it.",
    done: false,
  },
  {
    title: "Win a hackathon (?)",
    description: "still on the my chaos list hehehe.",
    done: false,
  },
];

export default function PersonalChaosList() {
  return (
    <SectionWrapper>
      <div className="space-y-4">
        <Typography
          title="My Chaos List"
          description="A totally random list of goals, dreams, and fun achievements. Some done, some pending, all meaningful."
        />

        {chaosList.map((item, i) => (
          <div key={i} className="flex items-start gap-3 py-2">
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
    </SectionWrapper>
  );
}
