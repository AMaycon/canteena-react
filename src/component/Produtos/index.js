import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Produtos() {

    return (
        <TouchableOpacity>
            <Image style={{ height: 80, width: 80 }} source={require('../../img/fantau.jpg')} />
            <Text >Fanta uva Lata</Text>
            <Text >Preço R$5,50</Text>
        </TouchableOpacity>
    );
}