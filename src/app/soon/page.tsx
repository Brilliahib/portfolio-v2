import { TrafficCone } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <TrafficCone className="h-8 w-8 text-amber-500" />
      <p className="text-center font-semibold text-foreground">
        Currently being <br /> cooked 🔥
      </p>
    </div>
  );
}
