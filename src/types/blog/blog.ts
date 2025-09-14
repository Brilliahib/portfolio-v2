import { Category } from "../category/category";
import { Tag } from "../tags/tags";

export interface Blog {
  id: number;
  slug: string;
  title: string;
  image: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  category: Category;
  tags: Tag[];
}
