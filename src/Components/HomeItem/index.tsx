import { TouchableOpacity, View } from "react-native";
import { BoldText, NormalText } from "../RootComponents/Texts/Texts";
import { styles } from "./HomeItem";
import { HomeItemProps } from "../../Types/Types";

export const HomeItem = ({ title, value }: HomeItemProps) => {
  return (
    <View style={styles.item}>
      <NormalText as={title} size={24} align="left" />
      <BoldText as={value} size={24} align="right" />
    </View>
  );
};
