import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppContainer from "./NavigationConfigration/BooksNavigator"
class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    )
  }
}
const styles = StyleSheet.create({
  main :{
    flex : 1,
    padding :10,
    alignItems : "center"
  },
  welcome :{
    fontFamily : "halfmoon_bold", 
    
  }
});




export default App;
