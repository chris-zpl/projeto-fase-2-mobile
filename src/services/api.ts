import axios from "axios";
import { User, Album } from "./types";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async (): Promise<User[]> => {
  const [usersRes, albumsRes] = await Promise.all([
    api.get<User[]>("/users"),
    api.get<Album[]>("/albums"),
  ]);

  const albumsByUser = albumsRes.data.reduce<Record<number, number>>(
    (acc, album) => {
      acc[album.userId] = (acc[album.userId] || 0) + 1;
      return acc;
    },
    {}
  );

  const usersWithAlbumCount = usersRes.data.map((user) => ({
    ...user,
    albumCount: albumsByUser[user.id] || 0,
  }));

  return usersWithAlbumCount;
};

export const getUserById = async (userId: number): Promise<User> => {
  const { data } = await api.get(`/users/${userId}`);
  return data;
};

export const getAlbumsByUser = async (userId: number): Promise<Album[]> => {
  const { data } = await api.get("/albums", { params: { userId } });
  return data;
};
