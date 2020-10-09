import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
};

export default general;

/*
 general.js: O arquivo general é o único diferente dos demais.
  Seu papel não é armazenar variáveis, mas sim armazenar estilos de componentes padrão.
   Pense que em seu aplicativo você possui um layout de seção que aplica um espaçamento
    e possui um título em negrito.
 */
/*
Ao invés de criar um componente chamado Section você apenas importa os estilos do general.js
 no seu arquivo styles.js e sai usando as propriedades section e secionTitle. 
 A importação pode ser realizada da seguinte forma:

 import { StyleSheet } from 'react-native';
import { general } from 'styles';
const styles = StyleSheet.create({
  ...general,
});
export default styles;
*/ 