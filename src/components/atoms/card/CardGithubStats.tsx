"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

export default function CardGithubStats() {
  const { resolvedTheme } = useTheme();

  return (
    <Card>
      <CardContent className="p-6">
        <GitHubCalendar
          username="Brilliahib"
          labels={{
            totalCount: "{{count}} contributions in the last half year",
          }}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          showWeekdayLabels
          weekStart={1}
        />
      </CardContent>
    </Card>
  );
}
