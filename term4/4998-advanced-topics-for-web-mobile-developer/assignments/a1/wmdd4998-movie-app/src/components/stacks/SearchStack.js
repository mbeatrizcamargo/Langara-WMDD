import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ShowSearchResultScreen from '../screens/ShowSearchResultScreen';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search List" component={SearchResultsScreen} />
      <Stack.Screen name="Search Details" component={ShowSearchResultScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
