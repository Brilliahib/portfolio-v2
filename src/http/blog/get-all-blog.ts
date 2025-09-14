import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Blog } from "@/types/blog/blog";

interface GetAllBlogResponse {
  data: Blog[];
}

export const GetAllBlogHandler = async (): Promise<GetAllBlogResponse> => {
  const { data } = await api.get<GetAllBlogResponse>("/blogs");

  return data;
};

export const useGetAllBlog = (
  options?: Partial<UseQueryOptions<GetAllBlogResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["blog-list"],
    queryFn: () => GetAllBlogHandler(),
    ...options,
  });
};
