import React, { useEffect, useState } from "react";
import { View, Text, Image, Button } from 'react-native';
import api from '../../services/api'
import { FlatList } from "react-native-gesture-handler";
import styles from "../../pages/Home/styles";


export default function Doces() {
    const [quantidade, setQuantidade] = useState(0);
    const [compras, setCompras] = useState([]);
    const [valor, setValor] = useState(0);

    function add(vlr) {
        var vlr = setQuantidade(quantidade + 1)
    //  = setValor((quantidade)*(valor))
       return alert(vlr)
    }

    function remove() {

        if (quantidade <= 0) {
            setQuantidade(quantidade)
        } else {
            setQuantidade(quantidade - 1);
        }
    }

    function filtrodescricao(descricao) {
        if (descricao.length < 27) {
            return descricao;
        }

        return `${descricao.substring(0, 24)}...`;
    }




    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function ListaEstoque() {
            await api.get('/filtro?tipo_produto=2')
                .then((response) => setProdutos(response.data))
                .catch(erro => console.log(erro))
        }
        ListaEstoque()
    }, [])

    return (
        <View style={{ marginTop: "15%" }} >
            <FlatList horizontal
                data={produtos}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View>
                        <Image style={{ width: 60, height: 60 }} source={{ uri: item.imagem_txt }} />
                        <View>
                            <Text>{item.nome_produto}</Text>
                            <Text>Disponíveis: {item.qtd_produto}</Text>
                            <Text>R${item.preco_produto.toFixed(2)}</Text>
                            <Text>{item.descricao_produto}</Text>
                        </View>
                        <View style={styles.btn}>
                            <Button onPress={add} title="+" style={styles.btnadd}></Button>
                            <Text>{quantidade}</Text>
                            <Button onPress={remove} title="-" style={styles.btnrem}></Button>
                        </View>
                        <Button title="ADICIONAR" style={styles.btnrem}></Button>
                        <Text>Total: R${valor.toFixed(2)}</Text>

                    </View>
                )}
            />
        </View>
    );
}
