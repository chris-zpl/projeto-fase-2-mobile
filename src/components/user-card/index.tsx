import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { User } from "@/services/interfaces";
import { styles } from "./styles";

export default function UserCard({ id, name, albumCount }: User) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/users/[userId]",
            params: { userId: id.toString() },
          })
        }
        activeOpacity={0.6}
      >
        <View style={styles.icon}>
          <Feather name="user" size={25} />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.albums}>Álbuns: {albumCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
