import { ScrollView, Text, View } from "react-native";
import { Container } from "../../GlobalStyle/GlobalStyle";
import { TabOptions } from "../../Components/TabOptions";
import { useState } from "react";
import { Title } from "../../Components/RootComponents/Texts/Texts";

export const Right = () => {
  const [pressed, setPressed] = useState<string>("Ganhos");

  return (
    <Container>
      <TabOptions active={pressed} setActive={setPressed} />
      {pressed === "Ganhos" ? (
        <View>
          <Title as="Histórico de ganhos" size={26} align="center" />
          <ScrollView></ScrollView>
        </View>
      ) : (
        <View>
          <Title as="Histórico de gastos" size={26} align="center" />
          <ScrollView></ScrollView>
        </View>
      )}
    </Container>
  );
};
