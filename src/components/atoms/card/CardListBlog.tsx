"use client";

import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Blog } from "@/types/blog/blog";
import { buildFromAppURL } from "@/utils/misc";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data?: Blog[];
  isLoading?: boolean;
  all?: boolean;
}

function CardListBlogSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[250px] w-full rounded-lg" />
      <Skeleton className="h-6 w-24 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-full rounded-md" />
        <Skeleton className="h-5 w-1/2 rounded-md" />
      </div>
    </div>
  );
}

export default function CardListBlog({ data, isLoading, all = false }: Props) {
  if (isLoading) {
    return (
      <div className="space-y-8">
        {Array.from({ length: all ? 6 : 3 }).map((_, i) => (
          <CardListBlogSkeleton key={i} />
        ))}
      </div>
    );
  }

  const blogsToShow = all ? (data ?? []) : (data?.slice(0, 3) ?? []);

  return (
    <div className="space-y-8">
      {blogsToShow.map((blog) => (
        <Link
          key={blog.id}
          href={`https://blog.brilliahib.tech/blog/${blog.slug}`}
          className="group block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="space-y-4">
            <Image
              src={buildFromAppURL(blog.image)}
              alt={blog.title}
              width={500}
              height={300}
              className="max-h-[250px] rounded-lg object-cover transition group-hover:opacity-80"
            />
            <Badge className="rounded-full" variant={"secondary"}>
              {blog.category.name}
            </Badge>
            <div className="space-y-2">
              <h3>{blog.title}</h3>
              <div className="text-sm text-muted-foreground">
                {format(new Date(blog.created_at), "dd MMM yyyy", {
                  locale: id,
                })}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
