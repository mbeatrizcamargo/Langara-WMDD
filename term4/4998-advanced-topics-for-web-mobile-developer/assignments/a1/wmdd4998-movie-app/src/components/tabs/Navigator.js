import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesTab from './MoviesTab';
import SearchTab from './SearchTab';
import TVShowsTab from './TVShowsTab';

const Tab = createMaterialTopTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MoviesTab} />
      <Tab.Screen name="Search Results" component={SearchTab} />
      <Tab.Screen name="TV Shows" component={TVShowsTab} />
    </Tab.Navigator>
  );
}

export default Navigator;
