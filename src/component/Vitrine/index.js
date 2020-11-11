import * as React from 'react';
import { Text, View } from 'react-native';
import Bebidas from "../../component/Produtos/bebidas";
import Salgados from "../../component/Produtos/salgados";
import Doces from "../../component/Produtos/doces";


export default function Vitrine({ navigation }) {

    return (
        <View style={{ height: "90%", backgroundColor: 'blue', marginTop: "10%" }}>
            <Text>teste02</Text>
            <View style={{ height: "28%", backgroundColor: 'red', marginTop: "8%" }}>
                <Text>teste03</Text>
                <Bebidas />
            </View>
            <View>
                <Text>teste04</Text>
                <Salgados />
            </View>
            <View>
                <Text>teste05</Text>
                <Doces />
            </View>
        </View>


    );
}