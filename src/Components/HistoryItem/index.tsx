import { TouchableOpacity, View } from "react-native";
import { BoldText, LightText, NormalText } from "../RootComponents/Texts/Texts";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { Category, HistoryItens } from "../../GlobalStyle/GlobalStyle";
import { styles } from "./HistoryItem";
import { HistoryItemProps } from "../../Types/Types";

import { useState } from "react";
import { ModalHistory } from "../../Modals/ModalHistory";

export const HistoryItem = ({
  value,
  category,
  id,
  data,
}: HistoryItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const isGain =
    category === "Salario" ||
    category === "Investimento" ||
    category === "Outros Ganhos" ||
    category === "Presentes" ||
    category === "Doações";

  return (
    <HistoryItens>
      <View style={styles.itemContainer}>
        <View>
          <BoldText as={value} align="left" size={24} />
          <Category>
            <Octicons
              name="dot-fill"
              size={24}
              color={isGain ? "green" : "#cf0404"}
              style={{ marginRight: 10 }}
            />
            <NormalText as={category} align="left" size={16} />
          </Category>
        </View>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => setModalVisible(true)}
        >
          <AntDesign name="infocirlceo" size={20} color="#1C6758" />
          <LightText as="Ver mais" align="center" size={12} />
        </TouchableOpacity>
      </View>
      <ModalHistory
        id={id}
        visible={modalVisible}
        setVisible={setModalVisible}
        data={data}
      />
    </HistoryItens>
  );
};
