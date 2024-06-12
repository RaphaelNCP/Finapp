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
                              onDelete, // Adicionando a função de deletar como prop
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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
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
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDelete(id)}
          >
            <AntDesign name="delete" size={20} color="#cf0404" />
            <LightText as="Deletar" align="center" size={12} />
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


