import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';




export default function Produtos() {
    const [modalVisible, setModalVisible] = useState(false);
    const [quantidade, setQuantidade] = useState(0);


    function filtrodescricao(descricao) {
        if (descricao.length < 27) {
            return descricao;
        }

        return `${descricao.substring(0, 24)}...`;
    }
    function add() {
        setQuantidade(quantidade + 1);
    }
    function remove() {

        if (quantidade <= 0) {
            setQuantidade(quantidade)
        } else {
            setQuantidade(quantidade - 1);

        }
    }
        const DATA = [
            { id: 1, nome: 'Fanta Uva', valor: 3.50, quantidade: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpVxlQkRd2i5nGFkEjVmwBQVRXtwACMmzJnw0WAsI28qTcrNEyu6ySv7pkTyY&usqp=CAc" },
            { id: 2, nome: 'Pepsi', valor: 3.00, quantidade: 180, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs5V-Dwn27dA3H7dPeO9WuYgl9fyTP5Hl3sQ&usqp=CAU" },
            { id: 3, nome: 'Fanta Laranja', valor: 3.50, quantidade: 190, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqrrAaahDqKrGdifu3fCcTRxI57E-GvBqX229t6jhUKC_PZVUF2L_yKUJLjSINqaZd1tYWNFo&usqp=CAc" },
            { id: 4, nome: 'Coca Cola', valor: 4.00, quantidade: 255, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAmmk3hEZ6j7DMVymcZ1KuaMaiLJINAu275A&usqp=CAU" },
            { id: 5, nome: 'Guaraná Antartica', valor: 2.68, quantidade: 102, img: "https://images.rappi.com.br/products/BR-94629-2098660461.png?d=128x90" },
            { id: 6, nome: 'Pastel', valor: 2.50, quantidade: 354, img: "https://images.rappi.com.br/products/2092384669-1531773431.png?d=128x90" },
            { id: 7, nome: 'Coxinha', valor: 2.00, quantidade: 2, img: "https://images.rappi.com.br/products/2096631940-1578078269967.png?d=200x200&e=webp" },
            { id: 8, nome: 'Esfiha', valor: 2.99, quantidade: 251, img: "https://images.rappi.com.br/products/2092638676-1537303738.png?d=128x90" },
            { id: 9, nome: 'Cachorro Quente', valor: 4.52, quantidade: 100, img: "https://images.rappi.com.br/products/2092367811-1532208789.png?d=128x90" },
            { id: 10, nome: 'kibe', valor: 3.69, quantidade: 159, img: "https://images.rappi.com.br/products/3e5f3d1d-a2be-4549-9b03-69568deb7af4-1576283549779.png?d=128x90" },
            { id: 11, nome: 'Bala', valor: 0.5, quantidade: 1024, img: "https://images.vexels.com/media/users/3/152046/isolated/lists/85695cafa4b8d7604260c93663808f6e-icone-de-doces-embrulhados.png" },
            { id: 12, nome: 'chiclete', valor: 0.15, quantidade: 352, img: "https://images.rappi.com.br/products/2092815412-1562018300.png?d=136x136" },
            { id: 13, nome: 'pirulito', valor: 0.25, quantidade: 512, img: "https://images.vexels.com/media/users/3/200447/isolated/lists/7651aace85b73f44836662d6190ac9eb-cor-de-pirulito-de-carnaval.png" },
            { id: 14, nome: 'chocolate barra', valor: 1.25, quantidade: 256, img: "https://images.rappi.com.br/products/2092815470-1562018339.png?d=200x200&e=webp" },
            { id: 15, nome: 'bombom', valor: 0.75, quantidade: 128, img: "https://images.rappi.com.br/products/2094042258-1585595140573.png?d=200x200&e=webp" },
        ]


        return (
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={styles.centeredView}>
                            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Informações qualquer</Text>
                                        <View style={styles.botoesModal}>
                                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={remove}//uma modal precisa estar dentro da view,
                                            >
                                                <Text style={styles.textStyle}>-</Text>
                                            </TouchableOpacity>


                                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                }}//uma modal precisa estar dentro da view,
                                            >
                                                <Text style={styles.textStyle}>adicionar ao carrinho</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={add}//uma modal precisa estar dentro da view,
                                            >
                                                <Text style={styles.textStyle}>+</Text>
                                            </TouchableOpacity>

                                        </View>
                                        <Text>{quantidade} total R${quantidade * 2},00</Text>
                                    </View>
                                </View>
                            </Modal>

                            <TouchableOpacity style={styles.openButton} onPress={() => { setModalVisible(true); }}                     >
                                <Image style={{ with: 75, heigth: 75 }} source={{ uri: item.img }} />
                                <Text>{item.nome}</Text>
                                <Text>Valor : {item.valor.toFixed(2)}</Text>
                                <Text>Disponíveis : {item.quantidade}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                    }
                    keyExtractor={item => item.id}
                />

            </View>

        );
    }
