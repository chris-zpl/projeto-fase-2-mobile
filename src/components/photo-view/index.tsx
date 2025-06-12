import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { getPhotosByAlbum } from "@/services/api";
import { Photo } from "@/services/interfaces";
import LoadingIndicator from "@/components/loading";
import { styles } from "./styles";

export default function PhotoView() {
  const { albumId, photoId } = useLocalSearchParams();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const photoFinded = photos.find((photo) => photo.id === Number(photoId));

  useEffect(() => {
    const loadedContent = async () => {
      const photosData = await getPhotosByAlbum(Number(albumId));
      setPhotos(photosData);
      setLoading(false);
    };
    loadedContent();
  }, [albumId, photoId]);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://placehold.co/800x600.png" }}
        style={styles.fullImage}
        contentFit="contain"
        contentPosition="center"
      />
      <Text style={styles.title}>{photoFinded?.title}</Text>
    </View>
  );
}
