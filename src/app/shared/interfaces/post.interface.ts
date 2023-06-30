import { ICategory } from './category.interface';
import { IImage } from "./image.interface";

export interface IPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  slug: string;
  image: IImage;
  category: ICategory;
}
