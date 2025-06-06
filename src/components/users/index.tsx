import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

interface UserInfo {
  data: {
    id: number;
    name: string;
    albumCount?: number;
  };
}

export default function Users({ data }: UserInfo) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/users/[userId]",
            params: { userId: data.id.toString() },
          })
        }
        activeOpacity={0.6}
      >
        <View style={styles.icon}>
          <Feather name="user" size={25} />
        </View>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.albums}>Álbuns: {data.albumCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
