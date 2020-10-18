import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

export default function Detail() {
  const vdoces = [
    { id: 11, nome: 'Bala', valor: 0.5, quantidade: 1024, img: "https://images.vexels.com/media/users/3/152046/isolated/lists/85695cafa4b8d7604260c93663808f6e-icone-de-doces-embrulhados.png" },
    { id: 12, nome: 'chiclete', valor: 0.15, quantidade: 352, img: "https://images.rappi.com.br/products/2092815412-1562018300.png?d=136x136" },
    { id: 13, nome: 'pirulito', valor: 0.25, quantidade: 512, img: "https://images.vexels.com/media/users/3/200447/isolated/lists/7651aace85b73f44836662d6190ac9eb-cor-de-pirulito-de-carnaval.png" },
    { id: 14, nome: 'chocolate barra', valor: 1.25, quantidade: 256, img: "https://images.rappi.com.br/products/2092815470-1562018339.png?d=200x200&e=webp" },
    { id: 15, nome: 'bombom', valor: 0.75, quantidade: 128, img: "https://images.rappi.com.br/products/2094042258-1585595140573.png?d=200x200&e=webp" },
  ]
  const total = vdoces.reduce((quantidade, valor) => quantidade * valor)

  return (

    
    <View style={{ flex: 1, marginTop: "20%" }}>
      <FlatList horizontal={true}
        data={vdoces}
        renderItem={({ item }) => (
          <View>
            <Image style={{width:80, height:80}} source={{uri: item.img}} />
            <View>
              <Text>{item.nome}</Text>
              <Text>Valor : {item.valor.toFixed(2)}</Text>
              <Text>Disponíveis : {item.quantidade}</Text>
            </View>
          </View>

        )
        }
        keyExtractor={item => item.id}
      />

  
    </View>
   /* <Text >{vdoces.reduce(total)}</Text>*/

  );
}