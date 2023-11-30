import React, { useEffect, useState } from "react";
import { Text, View, Modal, TouchableOpacity } from "react-native";
import { ModalProps } from "../../Types/Types";
import { Octicons } from "@expo/vector-icons";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Button, Category } from "../../GlobalStyle/GlobalStyle";
import { styles } from "./Modal";
import {
  BoldText,
  NormalText,
} from "../../Components/RootComponents/Texts/Texts";

export const ModalHistory = ({ visible, setVisible, id, data }: ModalProps) => {
  const { getItem, setItem } = useAsyncStorage("@finapp:itens");
  const [foundObject, setFoundObject] = useState<any | undefined>(undefined);

  useEffect(() => {
    const findObjectById = async () => {
      const found = await data!.find((obj: { id: string }) => obj.id === id);
      setFoundObject(found);
    };

    findObjectById();
  }, [id, data]);

  const isGain =
    (foundObject && foundObject.category === "Salario") ||
    (foundObject && foundObject.category === "Investimento") ||
    (foundObject && foundObject.category === "Outros Ganhos") ||
    (foundObject && foundObject.category === "Presentes") ||
    (foundObject && foundObject.category === "Doações");

  return (
    <View>
      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <BoldText as="Detalhes" size={30} align="center" />
            <View style={styles.value}>
              <NormalText
                as={`Valor: R$ ${foundObject ? foundObject.value : "N/A"}`}
                size={20}
                align="left"
              />
              <Category>
                <Octicons
                  name="dot-fill"
                  size={24}
                  color={
                    (foundObject && foundObject.category === "Salario") ||
                    (foundObject && foundObject.category === "Investimento") ||
                    (foundObject && foundObject.category === "Outros")
                      ? "green"
                      : "#cf0404"
                  }
                  style={{ marginRight: 10 }}
                />
                <NormalText
                  as={foundObject ? foundObject.category : "N/A"}
                  size={20}
                  align="left"
                />
              </Category>
            </View>
            <View>
              <BoldText as="Descrição:" size={20} align="left" />
              <NormalText
                as={foundObject ? foundObject.description : "N/A"}
                size={20}
                align="left"
              />
            </View>
            <Button
              onPress={() => {
                setVisible(false);
              }}
            >
              <NormalText as="Fechar" size={20} align="center" />
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};
