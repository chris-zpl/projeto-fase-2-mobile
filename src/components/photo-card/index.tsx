import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Photo } from "@/services/interfaces";
import { styles } from "./styles";
import { Image } from "expo-image";

export default function PhotosCard({ userId, albumId, id, title }: Photo) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/users/[userId]/[albumId]/[photoId]",
            params: { userId: userId.toString(), albumId: albumId.toString(), photoId: id.toString() },
          })
        }
        activeOpacity={0.6}
      >
        <View style={styles.photoContent}>
          <Image
            source={{ uri: "https://placehold.co/800x600.png" }}
            style={styles.photos}
            contentFit="cover"
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
