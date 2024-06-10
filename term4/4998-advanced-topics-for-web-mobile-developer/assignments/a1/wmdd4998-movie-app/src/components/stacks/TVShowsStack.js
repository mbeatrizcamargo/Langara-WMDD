import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TVShowsScreen from '../screens/TVShowsScreen';
import ShowTVShowScreen from '../screens/ShowTVShowScreen';

const Stack = createNativeStackNavigator();

const TVShowsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TV Show List" component={TVShowsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TV Show Details" component={ShowTVShowScreen} />
    </Stack.Navigator>
  );
}

export default TVShowsStack;
