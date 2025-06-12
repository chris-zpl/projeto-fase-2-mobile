import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray[300],
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.gray[100],
  },
  listContent:{
    paddingVertical: 20
  },
  countAlbums:{
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
