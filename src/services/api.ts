import axios from "axios";
import { User, Album, Photo } from "./types";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Realiza um get e pegar as informações de todos os usuários
export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get('/users');
  return data;
};

// Realiza um get e pega as informações dos ábums por usuário
export const getAlbumsByUser = async (userId: number): Promise<Album[]> => {
  const { data } = await api.get("/albums", { params: { userId } });
  return data;
};

// Realiza um get e pegar as informações de um usuário específico
export const getUserById = async (userId: number): Promise<User> => {
  const { data } = await api.get(`/users/${userId}`);
  return data;
};

// Realiza um get nos ábums por usuário e conta a quantidade de fotos de cada álbum
export const getAlbumsWithPhotoCount = async (userId: number): Promise<Album[]> => {
  const [albumRes, photoRes] = await Promise.all([
    api.get("/albums", {params: {userId}}),
    api.get("/photos")
  ])

  const albumPhotoMap: Record<number,number> = {}
  
  photoRes.data.forEach((photo:any) => {
    if(albumPhotoMap[photo.albumId]){
      albumPhotoMap[photo.albumId]++;
    }else{
      albumPhotoMap[photo.albumId] = 1;
    }
  });

  const completedAlbums = albumRes.data.map((album:Album) => ({
    ...album,
    photoCount: albumPhotoMap[album.id] || 0,
  }))

  return completedAlbums;
}

export const getPhotosByAlbum = async (albumId: number): Promise<Photo[]> => {
  const { data } = await api.get("/photos", { params: { albumId } });
  return data;
}
