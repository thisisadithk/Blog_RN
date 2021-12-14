import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './Screens/IndexScreen';
import { BlogProvider } from './Context/BlogContext';

const navigator = createStackNavigator({
  Index : IndexScreen
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
    <BlogProvider>
      <App/>
    </BlogProvider>
    )}

    