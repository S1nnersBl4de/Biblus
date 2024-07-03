export interface Translation {
    id: number;
    author_id: number;
    locale: string;
    country: string;
    fullname: string;
    description: string;
}
export interface Author {
    id: number;
    img: string;
    best_of_week: number;
    best_of_week_books: any;
    year_start: string;
    year_end: string;
    created_at: string;
    updated_at: string;
    fullname: string;
    description: string;
    country: string;
    translations: Translation[];
}

export interface authorROOT{
    data: Author[];
}