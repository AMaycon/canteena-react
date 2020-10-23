import React from 'react';
import { View, Text } from 'react-native';

export default function Teste() {
   
const obj = [{
        nome: 'coxinha',
        preco: 2.50
    },
    {
        nome: 'pastel',
        preco: 4.50

    },
    {
        nome: 'dogão',
        preco: 3.50
    },
    {
        nome: 'bala',
        preco: 0.05
    },
    {
        nome: 'coca',
        preco: 2.50
    }]

var array = obj.map( obj => obj.preco)
    return (
        <View>
            <Text>ta foda</Text>
            <Text>{array}</Text>
        </View>
    );
}