import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Container } from "../../GlobalStyle/GlobalStyle";
import { Title } from "../../Components/RootComponents/Texts/Texts";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CardProps } from "../../Types/Types";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryItem } from "../../Components/HistoryItem";

export const Historic = () => {
    const [data, setData] = useState<CardProps[]>([]);
    const { getItem, setItem } = useAsyncStorage("@finapp:itens");

    const handleFetchData = async () => {
        const res = await getItem();
        const data = res ? JSON.parse(res) : [];
        setData(data);
    };

    const handleDeleteItem = async (id: string) => {
        const res = await getItem();
        const currentData = res ? JSON.parse(res) : [];
        const newData = currentData.filter((item: CardProps) => item.id !== id);
        await setItem(JSON.stringify(newData));
        setData(newData);
    };

    useFocusEffect(
        useCallback(() => {
            handleFetchData().then(r => r);
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
                        onDelete={handleDeleteItem} // Passando a função de deletar como prop
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
};
