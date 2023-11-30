import { View } from "react-native";
import { BoldText, Title } from "../RootComponents/Texts/Texts";
import { Button, Input } from "../../GlobalStyle/GlobalStyle";
import { SelectList } from "react-native-dropdown-select-list";
import { AddsProps } from "../../Types/Types";
import { styles } from "./Adds";
import { useState } from "react";

export const Adds = ({ key, mock, title }: AddsProps) => {
  const [selected, setSelected] = useState("");

  return (
    <View>
      <Title as={title} size={32} align="center" />
      <View style={styles.inputView}>
        <BoldText as="Insira o valor:" size={26} align="left" />
        <Input placeholder="00.00" keyboardType="decimal-pad" />
      </View>
      <View style={styles.inputView}>
        <BoldText as="Insira a descrição:" size={26} align="left" />
        <Input
          placeholder="Descrição"
          style={{ height: 100, textAlignVertical: "top" }}
          multiline={true}
        />
      </View>
      <View style={styles.inputView}>
        <BoldText as="Selecione a categoria:" size={20} align="left" />
        <SelectList
          key={key}
          setSelected={(value: any) => setSelected(value)}
          data={mock}
          save="value"
          searchPlaceholder="Pesquisar"
          placeholder="Selecione"
          boxStyles={{ borderColor: "#1C6758", borderWidth: 2 }}
          dropdownStyles={{
            borderColor: "#1C6758",
            borderWidth: 2,
          }}
        />
        <Button
          disabled={selected === ""}
          style={{
            backgroundColor: selected === "" ? "#e2e2e2a7" : "#d6cda4",
            borderColor: selected === "" ? "#e2e2e2a7" : "#1C6758",
          }}
        >
          <BoldText as="Adicionar" size={26} align="center" />
        </Button>
      </View>
    </View>
  );
};
