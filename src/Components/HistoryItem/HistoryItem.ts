import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoButton: {
    padding: 10,
    borderLeftWidth: 1,
    borderColor: "#1C6758",
    width: 80,
    alignItems: "center",
  },
  deleteButton: {
    padding: 10,
    borderLeftWidth: 1,
    borderColor: "#000",
    width: 80,
    alignItems: "center",
  }
});
