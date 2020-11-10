import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import styles from './styles';
import api from '../../services/api'
import { FlatList } from "react-native-gesture-handler";


export default function Doces() {

    function filtrodescricao(descricao) {
        if (descricao.length < 27) {
            return descricao;
        }

        return `${descricao.substring(0, 24)}...`;
    }
    function add(valor) {
        setQuantidade(quantidade + 1);

        if (quantidade >= 1) {
            setTotal((valor) * (quantidade));
        }
    }

    function remove() {

        if (quantidade <= 0) {
            setQuantidade(quantidade)
        } else {
            setQuantidade(quantidade - 1);

        }
    }

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function ListaEstoque() {
            await api.get('/filtro?tipo_produto=2')
                .then((response) => setProdutos([response.data]))
                .catch(erro => console.log(erro))
        }
        ListaEstoque()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={produtos}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Image style={{ width: 60, height: 60 }} source={{ uri: item.imagem_txt }} />
                        <View>
                            <Text>{item.nome_produto}</Text>
                            <Text>{item.qtd_produto}</Text>
                            <Text>{item.preco_produto}</Text>
                            <Text>{item.descricao_produto}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
