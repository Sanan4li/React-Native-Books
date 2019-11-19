import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../Screens/CategoriesScreen';
import BooksScreen from '../Screens/BooksScreen';
import BooksDetailScreen from '../Screens/BooksDetailScreen';

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

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer ;











