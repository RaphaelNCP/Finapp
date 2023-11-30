import { ScrollView, View } from "react-native";
import { Button, Container, Input } from "../../GlobalStyle/GlobalStyle";
import { BoldText, Title } from "../../Components/RootComponents/Texts/Texts";
import { styles } from "./Add";
import { TabOptions } from "../../Components/TabOptions";
import { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Adds } from "../../Components/Adds";
import { dataExpense, dataGain } from "../../Mocks/Mocks";

export const Add = () => {
  const [pressed, setPressed] = useState<string>("Ganhos");
  const [selectedGain, setSelectedGain] = useState("");
  const [selectedExpense, setSelectedExpense] = useState("");

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
