import * as React from 'react';

import {Text,View,StyleSheet, Image} from 'react-native';

/* FUNCION DE NUESTRA PANTALLA DE POst */
export default function ScreenPost(){
  return(
      <>
     <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"}]}>

        <Text>Base de datos - Ver más {"\n"}</Text>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/react.jpg')}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/androidstudio.png')}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/javascript.png')}/></View>
        </View>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >React</Text></View>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Android Studio</Text></View>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Javascript</Text></View>
        </View>

        <Text>Desarrollo Móvil - Ver más{"\n"}</Text>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/C.png')}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/bitbucket-logo.png')}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/872px-Android_robot.svg.png')}/></View>
        </View>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Laravel</Text></View>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Bitbucket</Text></View>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Android</Text></View>
        </View>

        <Text>Laravel - Ver más{"\n"}</Text>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/react.jpg')}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/androidstudio.png')}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/javascript.png')}/></View>
        </View>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >React</Text></View>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Android Studio</Text></View>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Javascript</Text></View>
        </View>

        <Text>Aplicaciones web - Ver más{"\n"}</Text>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/C.png')}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/bitbucket-logo.png')}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={require('../../../assets/Images/872px-Android_robot.svg.png')}/></View>
        </View>
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Laravel</Text></View>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Bitbucket</Text></View>
          <View style={{flex:2,flexDirection:"row",justifyContent:"center"}}><Text >Android</Text></View>
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