import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 40,
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
  list: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.gray[100],
  },
  listContent:{

  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: colors.gray[300],
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
