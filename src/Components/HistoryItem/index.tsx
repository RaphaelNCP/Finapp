import { TouchableOpacity, View } from "react-native";
import { BoldText, LightText, NormalText } from "../RootComponents/Texts/Texts";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { HistoryItens } from "../../GlobalStyle/GlobalStyle";
import { styles } from "./HistoryItem";
import { HistoryItemProps } from "../../Types/Types";
import { Modals } from "../Modal";
import { useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export const HistoryItem = ({ value, category, id }: HistoryItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {} = useAsyncStorage("@finapp:itens");

  return (
    <HistoryItens>
      <View style={styles.itemContainer}>
        <View>
          <BoldText as={value} align="left" size={24} />
          <View style={styles.category}>
            <Octicons
              name="dot-fill"
              size={24}
              color={
                category === "Salario" ||
                category === "Investimento" ||
                category === "Outros"
                  ? "green"
                  : "#cf0404"
              }
              style={{ marginRight: 10 }}
            />
            <NormalText as={category} align="left" size={16} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => setModalVisible(true)}
        >
          <AntDesign name="infocirlceo" size={20} color="#1C6758" />
          <LightText as="Ver mais" align="center" size={12} />
        </TouchableOpacity>
      </View>
      <Modals id={id} visible={modalVisible} setVisible={setModalVisible} />
    </HistoryItens>
  );
};
