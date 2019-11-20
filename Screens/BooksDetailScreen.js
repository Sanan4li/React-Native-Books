import React, { Component } from 'react'
import { View, StyleSheet, Text } from "react-native";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyHeaderButton from "./MyHeaderButton";
 class BooksDetailScreen extends Component {
     static navigationOptions = ({ navigation }) => {
         
        return {
          title: navigation.getParam("title"),
          headerRight : <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
                <Item title="Favourtie" iconName="star" 
                onPress={()=>{
                    console.log("Pressed");
                }}
                />
          </HeaderButtons>
        };
      };
    render() {
        return (
           <View style={styles.main}>
               <Text>Books Detail Screen</Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex : 1,
        padding : 10
    }
});


export default BooksDetailScreen;