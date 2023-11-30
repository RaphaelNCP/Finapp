import { View, Modal } from "react-native";
import { ModalProps } from "../../Types/Types";
import { Button } from "../../GlobalStyle/GlobalStyle";
import {
  BoldText,
  NormalText,
} from "../../Components/RootComponents/Texts/Texts";
import { styles } from "./ModalHome";

export const ModalHome = ({ visible, setVisible }: ModalProps) => {
  return (
    <View>
      <Modal transparent={true} animationType="fade" visible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View>
              <BoldText as="Essenciais:" size={20} align="left" />
              <NormalText
                as="Alimentação - Transporte - Saúde - Educação - Contas"
                size={16}
                align="left"
              />
            </View>
            <View>
              <BoldText as="Lazer:" size={20} align="left" />
              <NormalText
                as="Viagens - Restaurantes - Festas - Compras"
                size={16}
                align="left"
              />
            </View>
            <View>
              <BoldText as="Renda:" size={20} align="left" />
              <NormalText
                as="Salário - Investimentos - Outros"
                size={16}
                align="left"
              />
            </View>
            <View>
              <BoldText as="Bônus:" size={20} align="left" />
              <NormalText
                as="Presentes - Doações - Outros"
                size={16}
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
