import { TouchableOpacity, View } from "react-native";
import { Container } from "../../GlobalStyle/GlobalStyle";
import { BoldText, Title } from "../../Components/RootComponents/Texts/Texts";
import { HomeItem } from "../../Components/HomeItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./Home";
import { ModalHome } from "../../Modals/ModalHome";
import { useCallback, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CardProps } from "../../Types/Types";
import { useFocusEffect } from "@react-navigation/native";

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<CardProps[]>([]);
  const { getItem } = useAsyncStorage("@finapp:itens");

  const handleFetchData = async () => {
    const res = await getItem();
    const data = res ? JSON.parse(res) : [];
    setData(data);
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  const calculateEssentials = (): string => {
    let total = 0;
    data.forEach((obj) => {
      if (
        obj.category === "Alimentação" ||
        obj.category === "Saúde" ||
        obj.category === "Transporte" ||
        obj.category === "Educação" ||
        obj.category === "Contas"
      ) {
        const value = obj.value.trim().replace(/\s/g, "");

        total += Number(value);
      }
    });
    return String(total.toFixed(2));
  };

  const calculateLazer = (): string => {
    let total = 0;
    data.forEach((obj) => {
      if (obj.category === "Lazer") {
        const value = obj.value.trim().replace(/\s/g, "");

        total += Number(value);
      }
    });
    return String(total.toFixed(2));
  };

  const calculateRenda = (): string => {
    let total = 0;
    data.forEach((obj) => {
      if (obj.category === "Salario" || obj.category === "Investimento") {
        const value = obj.value.trim().replace(/\s/g, "");

        total += Number(value);
      }
    });
    return String(total.toFixed(2));
  };

  const calculateBonus = (): string => {
    let total = 0;
    data.forEach((obj) => {
      if (
        obj.category === "Presentes" ||
        obj.category === "Doações" ||
        obj.category === "Outros Ganhos"
      ) {
        const value = obj.value.trim().replace(/\s/g, "");
        total += Number(value);
      }

      if (obj.category === "Outros Gastos") {
        const value = obj.value.trim().replace(/\s/g, "");
        total -= Number(value);
      }
    });
    return String(total.toFixed(2));
  };

  const calculateTotal = (): string => {
    let total = 0;
    const essentials = calculateEssentials();
    const lazer = calculateLazer();
    const renda = calculateRenda();
    const bonus = calculateBonus();
    total = Number(renda) - Number(essentials) - Number(lazer) + Number(bonus);
    return String(total.toFixed(2));
  };

  return (
    <Container style={{ justifyContent: "space-around" }}>
      <View>
        <Title as="Saldo Livre" size={36} align="center" />
        <BoldText as={`R$ ${calculateTotal()}`} size={36} align="center" />
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
        <HomeItem title="Essenciais" value={`R$ -${calculateEssentials()}`} />
        <HomeItem title="Lazer" value={`R$ -${calculateLazer()}`} />
        <HomeItem title="Renda" value={`R$ ${calculateRenda()}`} />
        <HomeItem title="Bônus" value={`R$ ${calculateBonus()}`} />
      </View>
      <ModalHome setVisible={setModalVisible} visible={modalVisible} />
    </Container>
  );
};
