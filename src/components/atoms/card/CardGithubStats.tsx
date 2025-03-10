"use client";

import { BentoCard } from "@/components/ui/bento-card";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

export default function CardGithubStats() {
  const { resolvedTheme } = useTheme();

  return (
    <BentoCard className="overflow-x-auto">
      <GitHubCalendar
        username="Brilliahib"
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        showWeekdayLabels
        weekStart={1}
      />
    </BentoCard>
  );
}
