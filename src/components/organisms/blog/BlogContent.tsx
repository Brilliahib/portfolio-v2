"use client";

import CardListBlog from "@/components/atoms/card/CardListBlog";
import { useGetAllBlog } from "@/http/blog/get-all-blog";

export default function BlogContent() {
  const { data, isPending } = useGetAllBlog();
  return (
    <div>
      <CardListBlog data={data?.data} isLoading={isPending} all={true} />
    </div>
  );
}
