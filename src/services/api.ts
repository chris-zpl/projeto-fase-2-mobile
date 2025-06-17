import axios from "axios";
import { User, Album, Photo } from "./interfaces";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Realiza um get e pegar as informações de todos os usuários
export const getUsers = async (): Promise<User[]> => {
  try {
    const { data } = await api.get("/users");
    return data;
  } catch (error) {
    console.error(`Erro ao buscar os usuários: ${error}`);
    throw new Error("Não foi possível obter os usuários");
  }
};

// Realiza um get e pega as informações dos ábums por usuário
export const getAlbumsByUser = async (userId: number): Promise<Album[]> => {
  try {
    const { data } = await api.get("/albums", { params: { userId } });
    return data;
  } catch (error) {
    console.error(`Erro ao buscar álbuns do usuário ${userId}: ${error}`);
    throw new Error(`Não foi possível obter os álbuns do usuário ${userId}.`);
  }
};

// Realiza um get e pega as informações de um usuário específico
export const getUserById = async (userId: number): Promise<User[]> => {
  try {
    const { data } = await api.get("/users", { params: { userId } });
    return data;
  } catch (error) {
    console.error(`Erro ao buscar usuário com ID ${userId}: ${error}`);
    throw new Error(`Não foi possível obter o usuário com ID ${userId}.`);
  }
};

// Realiza um get nos ábums por usuário e conta a quantidade de fotos de cada álbum
export const getAlbumsWithPhotoCount = async (userId: number): Promise<Album[]> => {
  try {
    const [albumRes, photoRes] = await Promise.all([
      api.get("/albums", { params: { userId } }),
      api.get("/photos"),
    ]);

    const albumPhotoMap: Record<number, number> = {};

    photoRes.data.forEach((photo: any) => {
      if (albumPhotoMap[photo.albumId]) {
        albumPhotoMap[photo.albumId]++;
      } else {
        albumPhotoMap[photo.albumId] = 1;
      }
    });

    const completedAlbums = albumRes.data.map((album: Album) => ({
      ...album,
      photoCount: albumPhotoMap[album.id] || 0,
    }));

    return completedAlbums;
  } catch (error) {
    console.error(`Erro ao buscar álbuns e fotos do usuário ${userId}: ${error}`);
    throw new Error(`Não foi possível obter os álbuns com contagem de fotos do usuário ${userId}.`);
  }
};

// Realiza um get e pega as informações das fotos por álbum específico
export const getPhotosByAlbum = async (albumId: number): Promise<Photo[]> => {
  try {
    const { data } = await api.get("/photos", { params: { albumId } });
    return data;
  } catch (error) {
    console.error(`Erro ao buscar fotos do álbum ${albumId}: ${error}`);
    throw new Error(`Não foi possível obter as fotos do álbum ${albumId}.`);
  }
};
