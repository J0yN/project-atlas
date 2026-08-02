export type Project = {
  id: string;
  slug?: string;
  title: string;
  description?: string;
  image?: { src: string; alt?: string; width?: number; height?: number };
  category?: string;
  tags?: string[];
  client?: string;
  year?: number;
  readingTime?: string;
  featured?: boolean;
};
