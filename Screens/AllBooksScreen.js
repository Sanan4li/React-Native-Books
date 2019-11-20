import React, { Component } from 'react'
import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {HeaderButtons , Item} from "react-navigation-header-buttons";
import MyHeaderButton from "./MyHeaderButton";
import BooksList from "./BooksData";
 class AllBooksScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: "All Books",
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
        books : BooksList,
        filteredBooks : null,
      }



      componentDidMount = ()=>{
        let cat = 0;
        let filteredList = this.state.books.filter(
            (book)=>{
             return book.category !== cat;
            }
        );
        this.setState({
            filteredBooks : filteredList
        });
   }

   



   loadBooks = (book)=>{
                   
    return (
        <TouchableOpacity onPress={
            ()=>{
                this.props.navigation.navigate("BooksDetail", 
                {
                    id : book.item.id,
                    category : book.item.category,
                    title:book.item.title,
                    author:book.item.author,
                    votes: book.item.votes,
                    rating: book.item.rating,
                    image : book.item.image

                });
            }
        }>
        <View style={styles.bookMain}>
        <View style={{width:"100%",overflow:"hidden", height:450, }}>
        <Image style={{width : "100%" , height:"100%"}} 
            source={{uri : book.item.image}} />
         </View>
        <View style={styles.book}>
            <Text style={styles.text}>{book.item.title}</Text>
            <Text style={styles.text}> by  {book.item.author}</Text>
        </View>
            
    </View>
    </TouchableOpacity>
    )

    }
  

    render() {
        return (
            <View style={styles.main}>
             <FlatList data={this.state.filteredBooks} renderItem={
                 this.loadBooks
                 }
             
              />
            </View>
         )
    }
}

const styles = StyleSheet.create({
    main: {
        flex : 1,
        padding : 10,
       
    },
    bookMain :{
        marginTop:10,
        width : "100%",
        height:500,
       
        borderColor:"black" , borderWidth:1,
        borderRadius : 5
    },
    book: {
        backgroundColor : "#00F739",
        flexDirection: "row",
        justifyContent : "space-around",
        alignItems : "flex-end",
        overflow:"hidden",
        paddingVertical: 14, 
        borderRadius:5
    },
    text : {
        color:"black",
        fontFamily : "halfmoon_bold",
        fontSize: 19,
    }
});

export default AllBooksScreen;
