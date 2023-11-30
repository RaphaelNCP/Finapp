import { ScrollView } from "react-native";
import { Container } from "../../GlobalStyle/GlobalStyle";

import { TabOptions } from "../../Components/TabOptions";

import { Adds } from "../../Components/Adds";
import { dataExpense, dataGain } from "../../Mocks/Mocks";
import { useState } from "react";

export const Add = () => {
  const [pressed, setPressed] = useState<string>("Ganhos");

  return (
    <Container>
      <TabOptions active={pressed} setActive={setPressed} />
      <ScrollView>
        {pressed === "Ganhos" ? (
          <Adds key={1} title="Adicionar Ganhos" mock={dataGain} />
        ) : (
          <Adds key={2} title="Adicionar Gastos" mock={dataExpense} />
        )}
      </ScrollView>
    </Container>
  );
};
