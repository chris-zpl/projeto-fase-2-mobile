import { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "@/components/header";
import AlbumCard from "@/components/album-card";
import LoadingIndicator from "@/components/loading";
import { getUserById, getAlbumsWithPhotoCount, getAlbumsByUser } from "@/services/api";
import { Album, User } from "@/services/interfaces";
import { styles } from "./styles";

export default function AlbumsPage() {
  const { userId } = useLocalSearchParams<{ userId: string }>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [albumsCount, setAlbumsCount] = useState<number>(0);
  const [users, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const userFinded = users.find((user) => user.id === Number(userId));

  useEffect(() => {
    const loadedContent = async () => {
      const userData = await getUserById(Number(userId));
      const albumData = await getAlbumsWithPhotoCount(Number(userId));
      const albumsCount = await getAlbumsByUser(Number(userId));
      setUser(userData);
      setAlbums(albumData);
      setAlbumsCount(albumsCount.length);
      setLoading(false);
    };
    loadedContent();
  }, [userId]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={userFinded?.name}
          subtitle="Selecione um ábum abaixo para visualizar suas fotos."
        />
        <Text style={styles.countAlbums}>Total: {albumsCount}</Text>
      </View>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AlbumCard id={item.id} userId={item.userId} title={item.title} photoCount={item.photoCount} />}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}
