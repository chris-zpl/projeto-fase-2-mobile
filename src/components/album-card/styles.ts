import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 16,
    flexShrink: 1,
    paddingEnd: 10
  },
  photos: {
    justifyContent: "center",
    color: colors.gray[200],
    flexShrink: 0,
  },
  albumContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
});
