import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Container, HistoryItem } from "../../GlobalStyle/GlobalStyle";
import { useCallback, useState } from "react";
import {
  BoldText,
  LightText,
  LongText,
  NormalText,
  Title,
} from "../../Components/RootComponents/Texts/Texts";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CardProps } from "../../Types/Types";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./Historic";
import { AntDesign, Octicons } from "@expo/vector-icons";

export const Historic = () => {
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

  type ItemProps = {
    value: string;
    category: string;
  };

  const Item = ({ value, category }: ItemProps) => (
    <HistoryItem>
      <View style={styles.itemContainer}>
        <View>
          <BoldText as={value} align="left" size={24} />
          <View style={styles.category}>
            <Octicons
              name="dot-fill"
              size={24}
              color={
                category === "Salario" ||
                category === "Investimento" ||
                category === "Outros"
                  ? "green"
                  : "#cf0404"
              }
              style={{ marginRight: 10 }}
            />
            <NormalText as={category} align="left" size={16} />
          </View>
        </View>
        <TouchableOpacity style={styles.infoButton}>
          <AntDesign name="infocirlceo" size={20} color="#1C6758" />
          <LightText as="Ver mais" align="center" size={12} />
        </TouchableOpacity>
      </View>
    </HistoryItem>
  );

  return (
    <Container>
      <Title as="Histórico" size={32} align="center" />
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item value={`R$ ${item.value}`} category={item.category} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </Container>
  );
};
