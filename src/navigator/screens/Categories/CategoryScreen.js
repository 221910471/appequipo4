import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image,StyleSheet } from 'react-native';

export default class CategoriesScreen extends Component{
  constructor(props) {
  super(props);
    this.state = {
    data: [],
    isLoading: true
    };
  }

  componentDidMount(){
    fetch('https://jgixhsse.lucusvirtual.es/categories')
    .then((response) => response.json())
    .then((json) =>{
      this.setState({ Categories: json.Categories});
    })
    .catch((error) => console.error(error))
    .finally(()=>{
      this.setState({isLoading: false});
    });
  }
    render(){
      const { Categories, isLoading} = this.state;
    return(
    
      <View style={{flex:1, padding:24}}>
      { isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={Categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem = {({ item }) => (
        <View style={{flex:1, justifyContent:"space-evenly", flexDirection:"column", alignItems:"center"}}>
          <View style={{flex:1,flexDirection:"column",justifyContent:"space-evenly", backgroundColor:"#FF937B", borderRadius: 8}}><Text style={styles.Red}>         !!{item.nombre}!!         {"\n"}</Text></View>
          <View style={{flex:1,flexDirection:"column",justifyContent:"space-evenly"}}><Image style={styles.imageCategory} source={{uri: item.image}}/></View>
          <View style={{flex:1,flexDirection:"column",justifyContent:"space-evenly", backgroundColor:"#FF937B", borderRadius: 8}}><Text style={styles.Red}>                                                                        {"\n"}</Text></View>    
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
      width: 348,
      height: 168,
      borderRadius: 8,
    },
    Purple: {
      // Define your HEX color code here.
      color: '#9C27B0',  
    },
    Red: { 
      // Define your HEX color code here.
      color: '#000000',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 20,
    },
    Orange:{
      // Define your HEX color code here.
      color : '#FF9800'  
    }

});