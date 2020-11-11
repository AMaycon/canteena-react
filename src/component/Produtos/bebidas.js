import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Bebidas() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function ListaEstoque() {
            await api.get('/filtro?tipo_produto=1')
                .then((response) => setProdutos(response.data))
                .catch(erro => console.log(erro))
        }
        ListaEstoque()
    }, [])

    return (
        <View >
            <Text>Bebidas</Text>
            <FlatList horizontal
                data={produtos}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Image style={{ width: 60, height: 60 }} source={{ uri: item.imagem_txt }} />
                        <View>
                            <Text>{item.nome_produto}</Text>
                            <Text>Diposníveis: {item.qtd_produto}</Text>
                            <Text>R${item.preco_produto.toFixed(2)}</Text>
                            <Text>{item.descricao_produto}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
