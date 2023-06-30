export interface IImage {
  id: number;
  description: string;
  original_name: string | null;
  file_name: string;
  file_extension: string;
  created_at: string;
  updated_at: string;
  image_url: string;
}
