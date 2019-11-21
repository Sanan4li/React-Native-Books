import React, { Component } from 'react'
import { View, StyleSheet, Text , TouchableOpacity , FlatList } from "react-native";
import {HeaderButtons , Item} from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
 class CategoriesScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: "Categories",
          headerLeft : <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
              <Item title="Menu" iconName="bars" onPress={
                  ()=>{
                    navigation.openDrawer()
                  }
              } style={{color:"black"}} />
          </HeaderButtons>
        };
      };
        
    
    state = {
         categories : [
             {id : "1" , title: "Action" , color : "#f5898d"},
             {id : "2" , title: "Adventure", color : "#f54242"},
             {id : "4" , title: "Autobiography ", color : "#ff298d"},
             {id : "5" , title: "Business", color : "#f5af42"},
             {id : "8" , title: "Crime Detective", color : "#00F739"},
             {id : "9" , title: "Fiction ", color : "#47fced"},
             {id : "10" , title: "Historical", color : "#f5a442"},
             {id : "14" , title: "Mystery", color : "#ffA18a"},
             {id : "20" , title: "Self Help", color : "#b9ffb0"},
             {id : "22" , title: "Entrepreneurship", color : "#f5d142"},
             {id : "23" , title: "Psychology", color : "#f54242"},
             {id : "28" , title: "Leadership", color : "#ffc7ff"}
         ]
     }
     renderItemsFunction = (itemData)=>{
        return (  
            <TouchableOpacity style={{...styles.item, 
                backgroundColor :itemData.item.color}}
                  onPress={
                ()=>{
                    this.props.navigation.navigate("Books" , {title:itemData.item.title,});
                }
            }>      
           
                <Text style={styles.text} numberOfLines={2}> {itemData.item.title} </Text>
           
            </TouchableOpacity>

        )
     }
     
    render() {
        return (
         
            <View style={styles.main}>
              <FlatList data={this.state.categories} numColumns={2} 
              renderItem={this.renderItemsFunction} />
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex : 1,
        padding : 10,
         
    },
    item:{
        flex : 1,
                height:120,
                margin:10,
                borderRadius : 10,
                shadowColor: "black",
                shadowOpacity : 0.4,
                shadowOffset : {width:0, height:2},
                shadowRadius : 6,
                elevation : 6,
                justifyContent : "flex-end",
                alignItems : "flex-end",
                padding : 15,
    },
    text : {
        fontSize : 15,
        fontFamily : "halfmoon_bold",
        alignContent : "flex-end",

    },
    
});


export default CategoriesScreen;