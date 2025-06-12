import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "100%",
    aspectRatio: 4 / 3, // mantém proporção da imagem (ajuste conforme necessário)
  },
  title: {
    marginTop: 10,
    justifyContent: "center",
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
    paddingHorizontal: 10,
  },
});