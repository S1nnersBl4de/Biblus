export interface bloginfo{
    image: string;
    created_at: number;
    title: string;
    text: string;
    id: string;
}

export interface blogROOT{
    data: bloginfo[];
}