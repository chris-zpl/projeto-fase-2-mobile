import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

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
    gap: 20,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: colors.gray[100],
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  name: { 
    fontWeight: "bold", 
    fontSize: 16,
  },
  albums: { 
    color: colors.gray[200],
  },
});
