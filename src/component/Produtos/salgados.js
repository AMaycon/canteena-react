import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { View, Text, FlatList, Image} from 'react-native';

export default function Salgados() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function ListaEstoque() {
            await api.get('/filtro?tipo_produto=3')
                .then((response) => setProdutos(response.data))
                .catch(erro => console.log(erro))
        }
        ListaEstoque()
    }, [])

    return (
        <View >
            <FlatList horizontal
                data={produtos}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Text>o que será</Text>
                        <Image style={{ width: 60, height: 60 }} source={{ uri: item.imagem_txt }} />
                        <View>
                            <Text>{item.nome_produto}</Text>
                            <Text>Disponíveis: {item.qtd_produto}</Text>
                            <Text>R${item.preco_produto.toFixed(2)}</Text>
                            <Text>{item.descricao_produto}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
