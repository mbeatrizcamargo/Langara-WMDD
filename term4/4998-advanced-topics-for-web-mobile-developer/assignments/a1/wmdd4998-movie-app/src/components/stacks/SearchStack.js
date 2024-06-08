import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ShowMovieScreen from '../screens/ShowMovieScreen';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search List" component={SearchResultsScreen} />
      <Stack.Screen name="Search Details" component={ShowMovieScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
