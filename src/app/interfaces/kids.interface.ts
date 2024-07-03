export interface kidsbooks {
    id: number;
    min_picture: string;
    description: string;
    author: string;
    url: string | null;
    category_id: number;
    position: number;
    cover: string | null;
    author_id: number;
    name: string;
    p: number;
    rate: number;

}

export interface kidsROOT{
    data: kidsbooks[];
}