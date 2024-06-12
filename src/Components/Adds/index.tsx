import { View } from "react-native";
import { BoldText, Title } from "../RootComponents/Texts/Texts";
import { Button, Input } from "../../GlobalStyle/GlobalStyle";
import { SelectList } from "react-native-dropdown-select-list";
import { AddsProps } from "../../Types/Types";
import { styles } from "./Adds";
import { useState } from "react";
import uuid from "react-native-uuid";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export const Adds = ({ mock, title }: AddsProps) => {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { getItem, setItem } = useAsyncStorage("@finapp:itens");

  const handleAdd = async () => {
    try {
      if (value === "" || description === "" || selected === "") {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Erro",
          text2: "Preencha todos os campos",
          visibilityTime: 2000,
        });
        return;
      }
      const id = uuid.v4();
      const newData = {
        id,
        value: value,
        description: description,
        category: selected,
      };

      const res = await getItem();
      const previousData = res ? JSON.parse(res) : [];
      const data = [...previousData, newData];

      await setItem(JSON.stringify(data));

      Toast.show({
        type: "success",
        position: "top",
        text1: "Sucesso",
        text2: "Item adicionado com sucesso",
        visibilityTime: 2000,
      });
      console.log(newData);
      setValue("");
      setDescription("");
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        position: "top",
        text1: "Erro",
        text2: "Erro ao adicionar item",
        visibilityTime: 2000,
      });
    }
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
