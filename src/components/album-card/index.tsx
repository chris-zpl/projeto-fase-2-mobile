import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Album } from "@/services/interfaces";
import { styles } from "./styles";

export default function AlbumCard({ id, userId, title, photoCount }: Album) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/users/[userId]/[albumId]",
            params: { userId: userId.toString(), albumId: id.toString(), },
          })
        }
        activeOpacity={0.6}
      >
        <View style={styles.albumContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.photosCount}>Fotos: {photoCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
