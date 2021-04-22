import * as React from 'react';

import {Text,View,StyleSheet, Image} from 'react-native';

/* FUNCION DE NUESTRA PANTALLA DE POst */
export default function ScreenInfo(){
  return(
    
      <>
     <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"}]}>
        
        

        <View style={{ borderRadius: 10, borderWidth: 3, flex:1, alignItems:"center", justifyContent:"center"}}>
        
          <Text style={{ fontSize: 15, alignItems: 'center'}}>
            
            
            {"\n"}
            Comentarios Favor de Comunicarte Al: 
            {"\n"}{"\n"}
            De Soporte
            {"\n"}{"\n"}
            soporte@gmail.com
            {"\n"}{"\n"}
            Versión 1.5
            {"\n"}
          </Text>
          {/* <Text style={{ fontSize: 10 }}>
            Comentarios Favor de Comunicarte Al: 
            {"\n"}
            De Soporte
            {"\n"}
            soporte@gmail.com
            {"\n"}
            Versión 1.5
            {"\n"}
            {"\n"}
            {"\n"}
          </Text> */}
        </View>
          
        
 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    imageCategory: {
        width: 68,
        height: 68,
      },
});