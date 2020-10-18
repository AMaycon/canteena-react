import React from "react";
import { Text, View} from 'react-native';
import { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Bebidas from "../../component/Produtos/bebidas";
import Salgados from "../../component/Produtos/salgados";
import Doces from "../../component/Produtos/doces";


export default function Vitrine({ navigation }) {

    

    return (
        <Fragment>
            <SafeAreaView style={{ height:"8%", backgroundColor: 'blue',marginTop:"6%" }}/>
                <View>
                    <Bebidas/>
                </View>
                <View>
                    <Salgados/>
                </View>
                <View>
                    <Doces/>
                </View>
                <View>
                    <Text>Valor total R$</Text>
                    <Text>Quantidade de itens : </Text>
                </View>
                <View>
                    <Text>Fechar pedido </Text>
                </View>
            <SafeAreaView style={{height:"8%", backgroundColor: 'red',marginTop:"25%"}} />
        </Fragment>
    );
}