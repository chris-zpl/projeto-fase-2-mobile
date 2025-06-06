import axios from "axios";
import { User, Album} from "./types";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async(): Promise<User[]> => {
    const {data} = await api.get("/users");
    return data;
}

export const getUserById = async(userId: number): Promise<User> => {
    const {data} = await api.get(`/users/${userId}`);
    return data;
}

export const getAlbumsByUser = async (userId: number): Promise<Album[]> => {
  const { data } = await api.get('/albums', { params: { userId } });
  return data;
};