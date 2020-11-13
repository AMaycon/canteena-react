import * as React from 'react';
import { Text, View } from 'react-native';
import Bebidas from "../../component/Produtos/bebidas";
import Salgados from "../../component/Produtos/salgados";
import Doces from "../../component/Produtos/doces";


export default function Vitrine() {

    return (
        <View style={{flex:1, height: "90%", backgroundColor: '#ffb74d', marginTop: "10%" }}>
            <Text>teste02</Text>
            <View>
                <Text>teste03</Text>
                <Bebidas/>
            </View>
            <View>
                <Text>teste04</Text>
                <Salgados/>
            </View>
            <View>
                <Text>teste05</Text>
                <Doces/>
            </View>
        </View>
    );
}