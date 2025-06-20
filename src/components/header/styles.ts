import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    gap:10,
    marginBottom: 10,
    backgroundColor: colors.white,
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[400],
  },
});
