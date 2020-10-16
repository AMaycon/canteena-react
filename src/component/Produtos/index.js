import React, { useState, useEffect } from 'react';
import { Text, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Produtos() {
    const [produtos,setProdutos] = useState([]);

    useEffect( () => {
        const data = [
            { id: 1, nome: 'Fanta Uva', valor: 3.50, quantidade: 200 },
            { id: 2, nome: 'Pepsi', valor: 3.00, quantidade: 180 },
            { id: 3, nome: 'Fanta Laranja', valor: 3.50, quantidade: 190 },
            { id: 4, nome: 'Coca Cola', valor: 4.00, quantidade: 255 },
            { id: 5, nome: 'Guaraná Antartica', valor: 2.68, quantidade: 102 },
            { id: 6, nome: 'Pastel', valor: 2.50, quantidade: 354 },
            { id: 7, nome: 'Coxinha', valor: 2.00, quantidade: 2 },
            { id: 8, nome: 'Esfirra', valor: 2.99, quantidade: 251 },
            { id: 9, nome: 'Cachorro Quente', valor: 4.52, quantidade: 100 },
            { id: 10, nome: 'kibe', valor: 3.69, quantidade: 159 },
            { id: 11, nome: 'Bala', valor: 0.5, quantidade: 1024 },
            { id: 12, nome: 'chiclete', valor: 0.15, quantidade: 352 },
            { id: 13, nome: 'pirulito', valor: 0.25, quantidade: 512 },
            { id: 14, nome: 'chocolate barra', valor: 1.25, quantidade: 256 },
            { id: 15, nome: 'bombom', valor: 0.75, quantidade: 128 },
        ]
        setProdutos(data);
    })
    

    return (
        <View>
            <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
            <Text >Fanta uva Lata</Text>
            <Text >Preço R$5,50</Text>
        </View>
    );
}