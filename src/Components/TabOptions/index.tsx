import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./TabOptions";
import { TabOptionsProps } from "../../Types/Types";

export const TabOptions = ({ active, setActive }: TabOptionsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setActive("Ganhos");
        }}
        style={[
          styles.button,
          {
            backgroundColor: active === "Ganhos" ? "#3D8361" : "#1C6758",
          },
        ]}
      >
        <Text style={styles.buttonText}>Ganhos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActive("Gastos");
        }}
        style={[
          styles.button,
          {
            backgroundColor: active === "Gastos" ? "#3D8361" : "#1C6758",
          },
        ]}
      >
        <Text style={styles.buttonText}>Gastos</Text>
      </TouchableOpacity>
    </View>
  );
};
