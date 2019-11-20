import React from "react";
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../Screens/CategoriesScreen';
import BooksScreen from '../Screens/BooksScreen';
import BooksDetailScreen from '../Screens/BooksDetailScreen';
import FavScreen from '../Screens/FavScreen';
import AllBooksScreen from '../Screens/AllBooksScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const defaultOptionsForStack =  {
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
      
  };
const AppNavigator = createStackNavigator({
    Categories: {
      screen: CategoriesScreen,
    },
    Books : {
        screen : BooksScreen,
    },
    
    BooksDetail : {
        screen : BooksDetailScreen,
        
    }
  }, 
      
  defaultOptionsForStack
  
  
  );

  const FavStack = createStackNavigator({
      Favourites : {
          screen : FavScreen
      },
      BooksDetail : {
          screen : BooksDetailScreen
      },
       Categories : {
        screen : CategoriesScreen
    }

  }, defaultOptionsForStack
  
  );
  const AllBooksStack = createStackNavigator({
    Favourites : {
        screen : AllBooksScreen
    },
    BooksDetail : {
        screen : BooksDetailScreen
    },
    Categories : {
        screen : CategoriesScreen
    }

}, defaultOptionsForStack

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
        screen : AllBooksStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return   <Icon name="book" size={25} color={tintColor} />
               }
        }
    },   
    Favourites: {
    screen :  FavStack,
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
          tabStyle : {height : 50 , zIndex:99,},
          labelStyle : {fontSize: 15, paddingTop:2,paddingBottom:3, fontFamily : "halfmoon_bold",},
      }
  }
  
  
  );


  const Drawer = createDrawerNavigator({
        Categories : TabNavigator,
        Books : AllBooksStack,
        Favourites : FavStack,
      
  })


const AppContainer = createAppContainer(Drawer)

export default AppContainer ;











