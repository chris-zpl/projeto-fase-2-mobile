import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 20,
    paddingBottom: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray[300],
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray[100],
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 40,
    marginBottom: 20,
  },
  center: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  list: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.gray[100],
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: colors.gray[300],
    fontStyle: "italic",
  },
});
