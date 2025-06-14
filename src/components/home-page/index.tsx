import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo</Text>
      <Text style={styles.subtitle}>
        Clique no começar para explorar todas as fotos e usuários disponíveis.
      </Text>

      <Link href="/users/" asChild replace>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
