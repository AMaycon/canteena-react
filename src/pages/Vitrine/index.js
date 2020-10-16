import React, { useState } from "react";
import { View, Text, ScrollView, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles'
import Produtos from '../../component/Produtos'


export default function Vitrine({ navigation }) {

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
  

    return (


        <View>
            <View style={styles.cabecalho} >
                <Text>Escolha seus produtos</Text>
            </View>
            <ScrollView>

                <View>
                    <ScrollView style={styles.scrollhor} horizontal={true} directionalLockEnabled={true} >
                        <View style={styles.centeredView}>
                            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Informações qualquer</Text>
                                        <View style={styles.botoesModal}>
                                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={add}//uma modal precisa estar dentro da view,
                                            >
                                                <Text style={styles.textStyle}>+</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                }}//uma modal precisa estar dentro da view,
                                            >
                                                <Text style={styles.textStyle}>adicionar ao carrinho</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={remove}//uma modal precisa estar dentro da view,
                                            >
                                                <Text style={styles.textStyle}>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                            <Text>{quantidade} total R${quantidade*2},00</Text>
                                    </View>
                                </View>
                            </Modal>

                            <TouchableOpacity style={styles.openButton} onPress={() => { setModalVisible(true); }}                     >
                                <Produtos />
                            </TouchableOpacity>
                        </View>

                       
                    </ScrollView>

                    <Text >**************************************************</Text>
                    <ScrollView style={styles.scrollhor} horizontal={true} directionalLockEnabled={true}  >
                    <Produtos />
                    </ScrollView>
                    

                    <Text >**************************************************</Text>
                    <ScrollView style={styles.scrollhor} horizontal={true} directionalLockEnabled={true}  >
                    <Produtos />
                    </ScrollView>

                    <Text >**************************************************</Text>
                    <ScrollView style={styles.scrollhor} horizontal={true} directionalLockEnabled={true}  >
                    <Produtos />
                    </ScrollView>
                </View>

            </ScrollView>
            <View style={styles.rodape} >
                <Text>Escolha seus produtos</Text>
            </View>
        </View >
    );
}