import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: colors.gray[300],
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.black,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: { 
    color: colors.white, 
    fontSize: 18, 
    fontWeight: "bold", 
  },
});
