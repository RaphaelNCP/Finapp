import { ToastAndroid, View } from "react-native";
import { BoldText, Title } from "../RootComponents/Texts/Texts";
import { Button, Input } from "../../GlobalStyle/GlobalStyle";
import { SelectList } from "react-native-dropdown-select-list";
import { AddsProps } from "../../Types/Types";
import { styles } from "./Adds";
import { useState } from "react";
import uuid from "react-native-uuid";

export const Adds = ({ mock, title }: AddsProps) => {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAdd = () => {
    ToastAndroid.show("Adicionado com sucesso!", ToastAndroid.BOTTOM);
    const id = uuid.v4();
    const newData = {
      id,
      value: value,
      description: description,
      category: selected,
    };
    console.log(newData);
    setValue("");
    setDescription("");
  };

  return (
    <View>
      <Title as={title} size={32} align="center" />
      <View style={styles.inputView}>
        <BoldText as="Insira o valor:" size={26} align="left" />
        <Input
          placeholder="00.00"
          keyboardType="decimal-pad"
          onChangeText={setValue}
          value={value}
        />
      </View>
      <View style={styles.inputView}>
        <BoldText as="Insira a descrição:" size={26} align="left" />
        <Input
          placeholder="Descrição"
          style={{ height: 100, textAlignVertical: "top" }}
          multiline={true}
          onChangeText={setDescription}
          value={description}
        />
      </View>
      <View style={styles.inputView}>
        <BoldText as="Selecione a categoria:" size={20} align="left" />
        <SelectList
          setSelected={(value: any) => setSelected(value)}
          onSelect={() => setCategory(selected)}
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
          onPress={() => handleAdd()}
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
