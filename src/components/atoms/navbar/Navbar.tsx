import Link from "next/link";
import { House, Code, User, BriefcaseBusiness, Bot } from "lucide-react";
import { ThemeToggler } from "@/components/theme-toggler";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const nav = [
  { icon: <House />, name: "Home", href: "/" },
  { icon: <Code />, name: "Project", href: "/project" },
  { icon: <Bot />, name: "Bot", href: "/bot" },
];

export default function Navbar() {
  return (
    <div className="fixed z-30 flex h-20 w-full items-end justify-center">
      <div className="absolute top-0 z-40 h-20 w-full bg-gradient-to-b from-white to-transparent dark:from-zinc-950"></div>
      <div className="z-50 flex items-center gap-x-1 rounded-lg border bg-white p-1 shadow-xl dark:bg-zinc-950">
        {nav.map((item, i) => (
          <Tooltip delayDuration={100} key={i}>
            <TooltipTrigger asChild>
              <Link href={item.href || "#"}>
                <Button variant="ghost" size="icon">
                  {item.icon}
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <ThemeToggler />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
