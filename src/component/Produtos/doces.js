import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Doces() {
    const vdoces = [
        { id: 11, nome: 'Bala', valor: 0.5, quantidade: 1024, img: "https://images.vexels.com/media/users/3/152046/isolated/lists/85695cafa4b8d7604260c93663808f6e-icone-de-doces-embrulhados.png" },
        { id: 12, nome: 'chiclete', valor: 0.15, quantidade: 352, img: "https://images.rappi.com.br/products/2092815412-1562018300.png?d=136x136" },
        { id: 13, nome: 'pirulito', valor: 0.25, quantidade: 512, img: "https://images.vexels.com/media/users/3/200447/isolated/lists/7651aace85b73f44836662d6190ac9eb-cor-de-pirulito-de-carnaval.png" },
        { id: 14, nome: 'chocolate barra', valor: 1.25, quantidade: 256, img: "https://images.rappi.com.br/products/2092815470-1562018339.png?d=200x200&e=webp" },
        { id: 15, nome: 'bombom', valor: 0.75, quantidade: 128, img: "https://images.rappi.com.br/products/2094042258-1585595140573.png?d=200x200&e=webp" },
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



    return  (
        <View>
            <FlatList horizontal={true}
                data={vdoces}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.openButton} onPress={() => { setModalVisible(true); }}  >



                        <Image style={{ with: 75, heigth: 75 }} source={{ uri: item.img }} />
                        <Text>{item.nome}</Text>
                        <Text>Valor : {item.valor.toFixed(2)}</Text>
                        <Text>Disponíveis : {item.quantidade}</Text>
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
                            }} onPress={() => { add(vdoces.valor) }}
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
