import React from 'react';
import { StyleSheet} from 'react-native';  
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './Screens/IndexScreen';
import { Provider } from './Context/BlogContext';
import ShowScreen from './Screens/ShowScreen';
import CreateScreen from './Screens/CreateScreen';
import EditScreen from './Screens/EditScreen';


const navigator = createStackNavigator({
  Index : IndexScreen,
  Show : ShowScreen,
  Create : CreateScreen,
  Edit : EditScreen
}, {
  initialRouteName : 'Index',
  defaultNavigationOptions : {
    title : "Blogs"
  }
})


const styles = StyleSheet.create({
});


const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
    )}

