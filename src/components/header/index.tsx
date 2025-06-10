import { View, Text } from "react-native";
import { HeaderProps } from "@/services/types";
import { styles } from "./styles";

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ? title : ""}</Text>
      <Text style={styles.subtitle}>{subtitle ? subtitle : ""}</Text>
    </View>
  );
}
