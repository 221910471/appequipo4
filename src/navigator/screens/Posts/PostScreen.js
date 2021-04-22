import React , {  Component} from 'react';

import {Text,View,StyleSheet, Image, ActivityIndicator, FlatList} from 'react-native';
//export default function ScreenPost(){
  export default class ScreenPost extends Component {
    constructor(props){
      super(props);
      this.state = {
        post: [],
        isLoading: true
      };
    }
  componentDidMount(){
    fetch('https://jgixhsse.lucusvirtual.es/index')
    .then((response) => response.json())
    .then((json) =>{
      this.setState({ post: json.post});
    })
    .catch((error) => console.error(error))
    .finally(()=>{
      this.setState({isLoading: false});
    });
  }
    render(){
      const { post, isLoading} = this.state;
    return(
    
      <View style={{flex:1, padding:24}}>
      { isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={post}
        keyExtractor={(item, index) => index.toString()}
        renderItem = {({ item }) => (
        <View style={{flex:1, justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Image style={styles.imageCategory} source={{uri: item.image}}/></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text style={styles.Red}>{item.title}</Text></View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text style={styles.Purple}>{item.description}</Text></View>
          <View><Text>{"\n"}</Text></View>
        </View>
          
        )}
        />)}
    </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    imageCategory: {
        width: 90,
        height: 90,
        borderRadius: 12,
      },
      Purple: {
        // Define your HEX color code here.
        color: '#9C27B0',  
      },
      Red: { 
        // Define your HEX color code here.
        color: '#F44336'
      },
      Orange:{
        // Define your HEX color code here.
        color : '#FF9800'  
      }

});