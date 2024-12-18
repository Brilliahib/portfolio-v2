import { Bot } from "lucide-react";

export default function BotWrapper() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Bot className="h-10 w-10 dark:text-orange-500" />
          <div className="space-y-2 text-center">
            <p className="text-center text-xl font-semibold">
              Currently being cooked 🔥
            </p>
            <p className="max-w-xs text-sm">
              This feature is currently in progress and will be used for
              AI-based chat bots.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
