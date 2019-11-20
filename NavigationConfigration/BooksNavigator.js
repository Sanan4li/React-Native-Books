import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../Screens/CategoriesScreen';
import BooksScreen from '../Screens/BooksScreen';
import BooksDetailScreen from '../Screens/BooksDetailScreen';
import FavScreen from '../Screens/FavScreen';
import AllBooksScreen from '../Screens/AllBooksScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAgain from 'react-native-vector-icons/SimpleLineIcons';
const AppNavigator = createStackNavigator({
    Categories: {
      screen: CategoriesScreen,
      navigationOptions : {
        headerTitle : "Books Categories",
      }

    },
    Books : {
        screen : BooksScreen,
      
    },
    BooksDetail : {
        screen : BooksDetailScreen
    }
  }, {
    defaultNavigationOptions: {
       
    headerStyle: {
        backgroundColor: '#28F1A6',
        elevation: 0,
        shadowOpacity: 0
    },
    headerTintColor: '#333333',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#0d0d0d'
    }
}   
      
  }
  
  
  );

  const TabNavigator = createBottomTabNavigator({
    Categories: {
        screen :  AppNavigator,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
             return   <Icon name="book-open" size={25} color={tintColor} />
            }
                
            }
    },
    Books : {
        screen : AllBooksScreen,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return   <Icon name="book" size={25} color={tintColor} />
               }
        }
    },   
    Favourites: {
    screen :  FavScreen,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return   <Icon name="star" size={25} color={tintColor} />
               }
    }
    },   
  }, {
      tabBarOptions : {
         
          activeTintColor : "blue",
          inactiveTintColor : "black",
          tabStyle : {height : 40},
          labelStyle : {fontSize: 15, paddingTop:5, fontFamily : "halfmoon_bold",},
      }
  }
  
  
  );


const AppContainer = createAppContainer(TabNavigator)

export default AppContainer ;











