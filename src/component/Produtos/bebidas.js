import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Bebidas() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function ListaEstoque() {
            await api.get('/filtro?tipo_produto=1')
                .then((response) => setProdutos([response.data]))
                .catch(erro => console.log(erro))
        }
        ListaEstoque()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
            data={produtos}
            keyExtractor={(item) => item._id}
            horizontal
            renderItem={({item})=>(
                <View>
                    <Text>{item.nome_produto}</Text>
                    <Text>{item.qtd_produto}</Text>
                    <Text>{item.preco_produto}</Text>
                </View>
            )}
        />
    </View>
    );
}
