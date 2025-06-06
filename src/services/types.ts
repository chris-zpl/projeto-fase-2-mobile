export interface User {
    id: number;
    name: string;
    albumCount?: number;
}
export interface Album{
    userId: number;
    id: number;
    title: string;
}