import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Container } from "../../GlobalStyle/GlobalStyle";
import {
  BoldText,
  NormalText,
  Title,
} from "../../Components/RootComponents/Texts/Texts";
import { HomeItem } from "../../Components/HomeItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./Home";
import { ModalHome } from "../../Modals/ModalHome";
import { useState } from "react";

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container style={{ justifyContent: "space-around" }}>
      <View>
        <Title as="Saldo Livre" size={36} align="center" />
        <BoldText as="R$ 0,00" size={36} align="center" />
      </View>
      <View>
        <View style={styles.description}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons
              style={{ marginRight: 8 }}
              name="information"
              size={16}
              color="#0023be"
            />
          </TouchableOpacity>
          <BoldText as="Relação" size={30} align="left" />
        </View>
        <HomeItem title="Essenciais" value="0.00" />
        <HomeItem title="Lazer" value="0.00" />
        <HomeItem title="Renda" value="0.00" />
        <HomeItem title="Bônus" value="0.00" />
      </View>
      <ModalHome setVisible={setModalVisible} visible={modalVisible} />
    </Container>
  );
};
