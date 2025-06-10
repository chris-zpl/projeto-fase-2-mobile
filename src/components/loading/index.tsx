import { ActivityIndicator, Text, View } from "react-native";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

export default function LoadingIndicator() {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={colors.blue[600]} />
      <Text>Carregando...</Text>
    </View>
  );
}
