import React, { useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles'
import Produtos from '../../component/Produtos'
import { FlatList } from "react-native-gesture-handler";
import { usecarrinho} from "../../context/carrinho";

export default function Vitrine({ navigation }) {
    const { add } = usecarrinho();
    const [modalVisible, setModalVisible] = useState(false);
    const produto = [
        {
            id: '1',
            nome: "Coca Cola",
            preco: 3.55
        },
        {
            id: '2',
            nome: "Pepsi",
            preco: 3.05
        },
    ]

    function filtrodescricao(descricao) {
        if (descricao.length < 27) {
            return descricao;
        }

        return `${descricao.substring(0, 24)}...`;
    }

    function mais(quantidade) {
        return quantidade += quantidade;
    }

    function menos(quantidade) {
        return quantidade -= quantidade;
    }

    return (

        <View>

            <View style={styles.flat} >
                <FlatList
                    data={produto}

                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity>
                                <Text>Nome do produto: {item.nome}</Text>
                                <Text>Preço: {item.preco}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                >
                </FlatList>

            </View>



            <ScrollView>
                <View  >
                    <Text >Escolha seus produtos</Text>
                </View>
                <View>
                    <ScrollView style={styles.scrollhor} horizontal={true} directionalLockEnabled={true} >
                        <View style={styles.centeredView}>
                            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Informações qualquer</Text>
                                        <View style={styles.botoesModal}>
                                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                }}//uma modal precisa estar dentro da view,
                                            >
                                                <Text style={styles.textStyle}>+</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={() => add(item)}//uma modal precisa estar dentro da view,
                                            >
                                                <Text style={styles.textStyle}>adicionar ao carrinho</Text>
                                            </TouchableOpacity>

                                        <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                            }}//uma modal precisa estar dentro da view,
                                        >
                                            <Text style={styles.textStyle}>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                </View>
                            </Modal>

                        <TouchableOpacity style={styles.openButton} onPress={() => { setModalVisible(true); }}                     >
                            <Produtos />

                        </TouchableOpacity>
                        </View>

                    <Image style={{ height: 80, width: 80 }} source={require('../../img/pepsi.png')} />
                    <Text >Pepsi Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
                    <Text >Fanta uva Lata</Text>

                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantal.png')} />
                    <Text >Fanta Laranja</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    </ScrollView>
                <Text >Escolha seus produtos</Text>
                <ScrollView style={styles.scrollhor} horizontal={true} directionalLockEnabled={true}  >
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/pepsi.png')} />
                    <Text >Pepsi Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
                    <Text >Fanta uva Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantal.png')} />
                    <Text >Fanta Laranja</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                </ScrollView>
                <Text >Escolha seus produtos</Text>
                <ScrollView style={styles.scrollhor} horizontal={true}  >
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/pepsi.png')} />
                    <Text >Pepsi Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
                    <Text >Fanta uva Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantal.png')} />
                    <Text >Fanta Laranja</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                </ScrollView>
                <Text >Escolha seus produtos</Text>
                <ScrollView style={styles.scrollhor} horizontal={true}  >
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/pepsi.png')} />
                    <Text >Pepsi Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
                    <Text >Fanta uva Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantal.png')} />
                    <Text >Fanta Laranja</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                </ScrollView>
                <ScrollView style={styles.scrollhor} horizontal={true} directionalLockEnabled={true}  >
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/pepsi.png')} />
                    <Text >Pepsi Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
                    <Text >Fanta uva Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantal.png')} />
                    <Text >Fanta Laranja</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                </ScrollView>
                <Text >Escolha seus produtos</Text>
                <ScrollView style={styles.scrollhor} horizontal={true}  >
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/pepsi.png')} />
                    <Text >Pepsi Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
                    <Text >Fanta uva Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantal.png')} />
                    <Text >Fanta Laranja</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                </ScrollView>
                <Text >Escolha seus produtos</Text>
                <ScrollView style={styles.scrollhor} horizontal={true}  >
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/pepsi.png')} />
                    <Text >Pepsi Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
                    <Text >Fanta uva Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantal.png')} />
                    <Text >Fanta Laranja</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                </ScrollView>
                <Text >Escolha seus produtos</Text>
                <ScrollView style={styles.scrollhor} horizontal={true}  >
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/pepsi.png')} />
                    <Text >Pepsi Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
                    <Text >Fanta uva Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/fantal.png')} />
                    <Text >Fanta Laranja</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                    <Image style={{ height: 80, width: 80 }} source={require('../../img/coca.jpg')} />
                    <Text >Coca Cola Lata</Text>
                </ScrollView>
                </View>

            </ScrollView>
        </View >
    );
}