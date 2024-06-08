import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from '../screens/MoviesScreen';
import ShowMovieScreen from '../screens/ShowMovieScreen';

const Stack = createNativeStackNavigator();

const MoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movie List" component={MoviesScreen} />
      <Stack.Screen name="Movie Details" component={ShowMovieScreen} />
    </Stack.Navigator>
  );
}

export default MoviesStack;
