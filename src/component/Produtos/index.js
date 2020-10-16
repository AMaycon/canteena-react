import React, { useState, useEffect } from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const data = [
            { id: 1, nome: 'Fanta Uva', valor: 3.50, quantidade: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpVxlQkRd2i5nGFkEjVmwBQVRXtwACMmzJnw0WAsI28qTcrNEyu6ySv7pkTyY&usqp=CAc" },
            { id: 2, nome: 'Pepsi', valor: 3.00, quantidade: 180, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs5V-Dwn27dA3H7dPeO9WuYgl9fyTP5Hl3sQ&usqp=CAU" },
            { id: 3, nome: 'Fanta Laranja', valor: 3.50, quantidade: 190, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqrrAaahDqKrGdifu3fCcTRxI57E-GvBqX229t6jhUKC_PZVUF2L_yKUJLjSINqaZd1tYWNFo&usqp=CAc" },
            { id: 4, nome: 'Coca Cola', valor: 4.00, quantidade: 255, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAmmk3hEZ6j7DMVymcZ1KuaMaiLJINAu275A&usqp=CAU" },
            { id: 5, nome: 'Guaraná Antartica', valor: 2.68, quantidade: 102, img: "" },
            { id: 6, nome: 'Pastel', valor: 2.50, quantidade: 354, img: "" },
            { id: 7, nome: 'Coxinha', valor: 2.00, quantidade: 2, img: "" },
            { id: 8, nome: 'Esfirra', valor: 2.99, quantidade: 251, img: "" },
            { id: 9, nome: 'Cachorro Quente', valor: 4.52, quantidade: 100, img: "" },
            { id: 10, nome: 'kibe', valor: 3.69, quantidade: 159, img: "" },
            { id: 11, nome: 'Bala', valor: 0.5, quantidade: 1024, img: "" },
            { id: 12, nome: 'chiclete', valor: 0.15, quantidade: 352, img: "" },
            { id: 13, nome: 'pirulito', valor: 0.25, quantidade: 512, img: "" },
            { id: 14, nome: 'chocolate barra', valor: 1.25, quantidade: 256, img: "" },
            { id: 15, nome: 'bombom', valor: 0.75, quantidade: 128, img: "" },
        ]
        setProdutos(data);
    })


    return (
        <View>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.img}</Text>
                        <Text>{item.nome}</Text>
                        <Text>{item.valor}</Text>
                    </View>

                )}
                keyExtractor={(item,index) => index.toString()}
            />
        </View>
    );
}