import { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "@/components/header";
import PhotoCard from "@/components/photo-card";
import LoadingIndicator from "@/components/loading";
import { getAlbumsByUser, getPhotosByAlbum } from "@/services/api";
import { Album, Photo } from "@/services/interfaces";
import { styles } from "./styles";

export default function PhotosPage() {
  const { userId, albumId } = useLocalSearchParams<{
    userId: string;
    albumId: string;
  }>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [numColumns, setNumColumns] = useState<number>(2);
  const currentAlbum = albums.find((album) => album.id === Number(albumId));

  useEffect(() => {
    const loadedContent = async () => {
      const photosData = await getPhotosByAlbum(Number(albumId));
      const albumsData = await getAlbumsByUser(Number(userId));
      setAlbums(albumsData);
      setPhotos(photosData);
      setLoading(false);
    };
    loadedContent();
  }, [albumId]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title={currentAlbum?.title} />
        <Text style={styles.countAlbums}>Total: {photos.length}</Text>
      </View>

      <FlatList
        data={photos}
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <PhotoCard
            userId={Number(userId)}
            albumId={item.albumId}
            id={item.id}
            title={item.title}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}
