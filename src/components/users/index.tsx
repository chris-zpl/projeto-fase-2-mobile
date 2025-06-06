import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

interface UserInfo {
  data: {
    id: number;
    name: string;
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
    >
      <View style={styles.icon}>
        <Feather name="user" size={25} color={colors.gray[300]} />
      </View>
      <View>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.albums}>Álbuns: 10</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
}
