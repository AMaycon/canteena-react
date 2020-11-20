import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import api from '../../services/api'
import { FlatList } from "react-native-gesture-handler";
import ModalProdutos from '../ModalProduto/index.js'
// import styles from "../../pages/Home/styles";


export default function Doces() {
    const [modal, setModal] = useState(false);
    const [produtoID, setProdutoID] = useState("")
    // const [quantidade, setQuantidade] = useState(0);
    // const [compras, setCompras] = useState([]);
     const [valor, setValor] = useState(0);

    function add(vlr) {
        var valor = setQuantidade(quantidade + 1)
        alert(vlr)
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

    function handleGetIdProduto(id) {
        setProdutoID(id)
        setModal(true)
    }

    return (
        <>
        <View style={styles.container} >
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
                        {/* <Button onPress={() => add(item.preco_produto)} title="+"></Button>
                            <Text>{quantidade}</Text>
                        <Button onPress={remove} title="-"></Button> */}
                        <Button 
                            onPress={() => {
                                handleGetIdProduto(item._id)
                            }} 
                            title="ADICIONAR">
                        </Button>
                        {/* <Text>Total: R${valor.toFixed(2)}</Text> */}
                    </View>
                )}
            />
        </View>

        {modal && (
            <ModalProdutos id={produtoID} functionCloseModal={() => setModal(false)}/>
        )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})
