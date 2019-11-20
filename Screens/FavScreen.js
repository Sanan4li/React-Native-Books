import React, { Component } from 'react'
import {View, Text, Image } from "react-native";
import {HeaderButtons , Item} from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
 class FavScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: "Favourites",
          headerLeft : <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
              <Item title="Menu" iconName="bars" onPress={
                  ()=>{
                    navigation.openDrawer()
                  }
              } style={{color:"black"}} />
          </HeaderButtons>
        };
      };
    render() {
        return (
            <View style={{flex:1, justifyContent : "center", alignItems: "center"}}>
                    <Text>Favourtie Screen</Text>
            </View>
        )
    }
}
export default FavScreen;
