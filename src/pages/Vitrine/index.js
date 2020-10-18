import React from "react";
import { View} from 'react-native';
import { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Bebidas from "../../component/Produtos/bebidas";
import Salgados from "../../component/Produtos/salgados";
import Doces from "../../component/Produtos/doces";


export default function Vitrine({ navigation }) {

    

    return (
        <Fragment>
            <SafeAreaView style={{ height:"15%", flex:0.5, backgroundColor: 'blue' }}/>
                <View>
                    <Bebidas/>
                </View>
                <View>
                    <Salgados/>
                </View>
                <View>
                    <Doces/>
                </View>
            <SafeAreaView style={{ marginTop:"75%", flex: 0.5, backgroundColor: 'red' }} />
        </Fragment>
    );
}