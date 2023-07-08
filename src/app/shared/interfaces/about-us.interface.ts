import { IImage } from "./image.interface";

export interface IAboutUs {
  id: number;
  description: string;
  image: IImage;
  created_at: string;
  updated_at: string;
}
