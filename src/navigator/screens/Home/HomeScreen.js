import * as React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import ComponentSlider from '../../../components/Slider/ComponentSlider'
 /* Declaración De Nuestro función Home Screenjs */
export default function HomeScreen(){

    return(
        <>
     <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}]}>
      {/* V-SLIDER */}
      <ComponentSlider/>
      {/* <View style={{ flex: 1, backgroundColor: "red", justifyContent:"center",}}><Text>Slider</Text></View>
       */}
      {/* VISTA CATEGORI 1 */}

      <Text>{"\n"}MISIÓN DE LA ORGANIZACIÓN{"\n"}</Text>
      <View style={{flex:1, backgroundColor:"#E47158", justifyContent:"center", alignItems:"center",borderRadius: 16}}>
        <View style={{flex:1,justifyContent:"center" ,borderRadius: 16}}><Text>Ofrecer una amplia variedad de joyas con la mejor, calidad y
									valor, y brindar los mejores precios en el mercado.</Text></View>
      </View>

      {/* Vista categoria 2 */}
      <Text>{"\n"}VISIÓN DE LA ORGANIZACIÓN{"\n"}</Text>
      <View style={{flex:1, backgroundColor:"#E47158", justifyContent:"center", flexDirection:"row", alignItems:"center",borderRadius: 16}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>Crecer como empresa líder en el mercado de de venta de joyas de segunda mano en línea,buscando la innovación en el sector, motivados por la pasión y compromiso para nuestra empresa y sus nuevos intereses.</Text></View>
      </View>
    </View>  
        </>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    }
    });

