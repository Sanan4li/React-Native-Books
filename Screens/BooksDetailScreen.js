import React, { Component } from 'react'
import { View, StyleSheet, Text } from "react-native";
 class BooksDetailScreen extends Component {
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