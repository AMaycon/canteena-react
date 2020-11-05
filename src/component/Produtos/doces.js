import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Doces() {

    const [quantidade, setQuantidade] = useState(80);
    const total = vdoces.map(t => t.quantidade * t.valor)
    
    function filtrodescricao(descricao) {
        if (descricao.length < 27) {
            return descricao;
        }

        return `${descricao.substring(0, 24)}...`;
    }
    function add() {
        setQuantidade( quantidade + 1);
     
      }
    /*
        function remove() {
    
            if (quantidade <= 0) {
                setQuantidade(quantidade)
            } else {
                setQuantidade(quantidade - 1);
    
            }
        }
    */


    return (
        <View>
            <FlatList horizontal={true}
                data={vdoces}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.openButton}  >

                        <View>
                            <Image style={{ width: 60, height: 60 }} source={{ uri: item.img }} />
                            <View>
                                <Text>{item.nome}</Text>
                                <Text>Valor :R$ {item.valor.toFixed(2)}</Text>
                                <Text>Disponíveis : {item.quantidade}</Text>
                            </View>
                            <View style={styles.botoesModal}>
                                <TouchableOpacity style={{
                                    width: "45%", height: "45%", backgroundColor: "#d50000", borderRadius: 25, justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                // onPress={}//uma modal precisa estar dentro da view,
                                >
                                    <Text style={styles.textStyle}>-</Text>
                                </TouchableOpacity>



                                <TouchableOpacity style={{
                                    width: "45%", height: "45%", backgroundColor: "#2196F3", borderRadius: 25, justifyContent: 'center',
                                    alignItems: 'center',
                                }} onPress={() => { add }}
                                //uma modal precisa estar dentro da view,
                                >
                                    <Text style={styles.textStyle}>+</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableOpacity>
                )
                }
                keyExtractor={item => item.id}
            />



        </View>
    )
}
