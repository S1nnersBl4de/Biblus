
export interface Author {
  id: number;
  img: string;
  best_of_week: number;
  best_of_week_books: any[];
  year_start: string;
  year_end: string | null;
  created_at: string;
  updated_at: string;
  fullname: string;
  description: string;
  country: string;
}

export interface bestsellerData {
  id: number;
  url: string | null;
  category_id: number;
  position: number;
  cover: string | null;
  author_id: number;
  is_bestseller: number;
  is_new: number;
  name: string;
  rate: number | null;
  p: number;
  stockOrNot: number;
  min_picture: string;
  description: string;
  author: Author;
}

export interface bestsellerDataROOT {
  data: bestsellerData[];
}
