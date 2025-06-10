import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Photo } from "@/services/types";
import { styles } from "./styles";

export default function PhotoCard({ userId, albumId, id, title, url, thumbnailUrl }: Photo) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/users/[userId]/[albumId]",
            params: { userId: userId.toString(), albumId: albumId.toString(), },
          })
        }
        activeOpacity={0.6}
      >
        <View style={styles.albumContent}>
          <Text style={styles.photos}>teste</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
