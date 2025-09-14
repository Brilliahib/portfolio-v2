import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import ChatBot from "./BotContent";

export default function BotWrapper() {
  return (
    <SectionWrapper id="chat" className="space-y-7">
      <ChatBot />
    </SectionWrapper>
  );
}
