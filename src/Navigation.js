import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import JobsScreen from './screens/JobsScreen';
import JobDetailsScreen from './screens/JobDetailsScreen';
import BookmarksScreen from './screens/BookmarksScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JobsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Jobs" component={JobsScreen} />
    <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Jobs" component={JobsStack} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
