import { View } from "react-native";
import { Container, Input } from "../../GlobalStyle/GlobalStyle";
import { BoldText, Title } from "../../Components/RootComponents/Texts/Texts";

export const Add = () => {
  return (
    <Container>
      <Title as="Adicionar ganhos e gastos" size={36} align="center" />
      <View>
        <BoldText as="Insira o valor:" size={26} align="left" />
        <Input placeholder="00.00" keyboardType="decimal-pad" />
      </View>
    </Container>
  );
};
