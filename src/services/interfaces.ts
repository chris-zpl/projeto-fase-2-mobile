export interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export interface User {
  id: number;
  name: string;
  albumCount?: number;
}

export interface Album {
  userId: number;
  id: number;
  title?: string;
  photoCount?: number;
}

export interface Photo {
  userId: number;
  albumId: number;
  id: number;
  title: string;
}
