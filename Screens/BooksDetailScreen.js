import React, { Component } from 'react'
import { View, StyleSheet, Text , ScrollView } from "react-native";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyHeaderButton from "./MyHeaderButton";
import FitImage from 'react-native-fit-image';
import { Rating, AirbnbRating } from 'react-native-ratings';
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
        let id = this.props.navigation.getParam("id");
        let category = this.props.navigation.getParam("category");
        let title = this.props.navigation.getParam("title");
        let author = this.props.navigation.getParam("author");
        let votes = this.props.navigation.getParam("votes");
        let rating = Math.floor(parseInt(this.props.navigation.getParam("rating")));
        let image = this.props.navigation.getParam("image");
        return (
            <ScrollView>
           <View style={styles.main}>
          
               <FitImage
                source={{ uri: image }}
                    style={styles.fitImage}
                />
                <View style={styles.infoBox}>
                    <Text>Book Title</Text>
                    <Text style={styles.propText}>{title}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text>Written By</Text>
                    <Text style={styles.propText}>{author}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text>Category</Text>
                    <Text style={styles.propText}>{category}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text>Votes</Text>
                    <Text style={styles.propText}>{votes}</Text>
                </View>
               <View style={styles.rating}>
               <Rating
                readonly
                startingValue={rating}
                    ratingCount={5}
                    imageSize={40}
                    showRating
            
                />
               </View>
           </View>
           </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex : 1,
        padding : 10,
    },
    rating : {
        marginTop:10,
        marginBottom:10
    },
   infoBox: {
       flexDirection:"row", 
       justifyContent:"space-between", borderColor:"gray",
       borderWidth:1,
        padding:10,
        marginTop:15,
            },
    fitImage: {
        borderRadius: 20,
        zIndex : -1,
      },
      fitImageWithSize: {
        height: 100,
        width: 30,
      },
      defaultText:{
        fontSize : 15,
      },
      propText: {
        fontFamily : "halfmoon_bold",
        fontSize : 15,
      }

});


export default BooksDetailScreen;