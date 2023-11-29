import { Text, View } from "react-native";
import { Container } from "../../GlobalStyle/GlobalStyle";
import {
  BoldText,
  NormalText,
  Title,
} from "../../Components/RootComponents/Texts/Texts";
import { HomeItem } from "../../Components/HomeItem";

export const Home = () => {
  return (
    <Container style={{ justifyContent: "space-around" }}>
      <View>
        <Title as="Saldo Livre" size={36} align="center" />
        <BoldText as="R$ 0,00" size={36} align="center" />
      </View>
      <View>
        <BoldText as="Relação" size={30} align="left" />
        <HomeItem title="Gastos essênciais" value="0.00" />
        <HomeItem title="Gastos de lazer" value="0.00" />
        <HomeItem title="Renda" value="0.00" />
        <HomeItem title="Ganhos bônus" value="0.00" />
      </View>
    </Container>
  );
};
