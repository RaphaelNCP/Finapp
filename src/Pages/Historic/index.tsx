import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Container } from "../../GlobalStyle/GlobalStyle";
import { useCallback, useState } from "react";
import { Title } from "../../Components/RootComponents/Texts/Texts";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CardProps } from "../../Types/Types";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryItem } from "../../Components/HistoryItem";

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

  return (
    <Container>
      <Title as="Histórico" size={32} align="center" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <HistoryItem
            id={item.id}
            value={`R$ ${item.value}`}
            category={item.category}
            data={data}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
