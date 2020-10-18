import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Salgados() {
    const vsalgado = [
        { id: 6, nome: 'Pastel', valor: 2.50, quantidade: 354, img: "https://images.rappi.com.br/products/2092384669-1531773431.png?d=128x90" },
        { id: 7, nome: 'Coxinha', valor: 2.00, quantidade: 2, img: "https://images.rappi.com.br/products/2096631940-1578078269967.png?d=200x200&e=webp" },
        { id: 8, nome: 'Esfiha', valor: 2.99, quantidade: 251, img: "https://images.rappi.com.br/products/2092638676-1537303738.png?d=128x90" },
        { id: 9, nome: 'Cachorro Quente', valor: 4.52, quantidade: 100, img: "https://images.rappi.com.br/products/2092367811-1532208789.png?d=128x90" },
        { id: 10, nome: 'kibe', valor: 3.69, quantidade: 159, img: "https://images.rappi.com.br/products/3e5f3d1d-a2be-4549-9b03-69568deb7af4-1576283549779.png?d=128x90" },
    ]


    const [modalVisible, setModalVisible] = useState(false);
    const [quantidade, setQuantidade] = useState(0);
    const [total, setTotal] = useState(0);

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



    return (
        <View>
            <FlatList horizontal={true}
                data={vsalgado}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.openButton} onPress={() => { setModalVisible(true); }}  >
                        <View>
                            <Image style={{ width: 60, height: 60 }} source={{ uri: item.img }} />
                            <View>
                                <Text>{item.nome}</Text>
                                <Text>Valor : {item.valor.toFixed(2)}</Text>
                                <Text>Disponíveis : {item.quantidade}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
                }
                keyExtractor={item => item.id}
            />
            <View style={styles.centeredView}>
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Informações qualquer</Text>
                        <View style={styles.botoesModal}>
                            <TouchableOpacity style={{
                                width: "45%", height: "45%", backgroundColor: "#d50000", borderRadius: 25, justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                onPress={remove}//uma modal precisa estar dentro da view,
                            >
                                <Text style={styles.textStyle}>-</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={{
                                marginHorizontal: "8%", width: "85%", height: "45%", backgroundColor: "#64dd17", borderRadius: 25, justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}//uma modal precisa estar dentro da view,
                            >
                                <Text style={styles.textStyle}>adicionar ao carrinho</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: "45%", height: "45%", backgroundColor: "#2196F3", borderRadius: 25, justifyContent: 'center',
                                alignItems: 'center',
                            }} onPress={() => { add(vsalgado.valor) }}
                            //uma modal precisa estar dentro da view,
                            >
                                <Text style={styles.textStyle}>+</Text>
                            </TouchableOpacity>

                        </View>
                        <Text>Quantidade : {quantidade}</Text>
                        <Text>total: {total}</Text>
                    </View>
                </Modal>


            </View>


        </View>
    )
}