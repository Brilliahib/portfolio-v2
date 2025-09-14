"use client";

import CardListBlog from "@/components/atoms/card/CardListBlog";
import SectionWrapper from "@/components/atoms/motion/SectionMotionWrapper";
import Typography from "@/components/atoms/typography/Typography";
import { useGetAllBlog } from "@/http/blog/get-all-blog";

export default function HomeWriting() {
  const { data, isPending } = useGetAllBlog();
  return (
    <SectionWrapper className="pt-24">
      <div className="space-y-8">
        <Typography
          title="My Tech Writings"
          description="A collection of my writings, where I share lessons learned, technical deep dives, and insights from my journey as a developer."
        />
        <CardListBlog data={data?.data} isLoading={isPending} />
      </div>
    </SectionWrapper>
  );
}
