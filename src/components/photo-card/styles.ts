import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: colors.gray[200]
  },
  title: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  photos: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  photoContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
