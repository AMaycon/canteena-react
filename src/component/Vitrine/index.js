import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './styles'
import Bebidas from "../../component/Produtos/bebidas";
import Salgados from "../../component/Produtos/salgados";
import Doces from "../../component/Produtos/doces";


export default function Vitrine({ navigation }) {

    return (
        <View style={{ height: "90%", backgroundColor: 'blue', marginTop: "10%" }}>
            <Text>HEADER</Text>
            <View style={{ height: "28%", backgroundColor: 'red', marginTop: "8%" }}>
                <Bebidas />
            </View>
            <View>
                <Salgados />
            </View>
            <View>
                <Doces />
            </View>
        </View>


    );
}