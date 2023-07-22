import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from '../screens/Favorites';
import MyStackPokemon from './MyStackPokemon';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      swipeEdgeWidth: 0,
    }}
      gestureEnabled={false}
      initialRouteName="Pokemones"
   >
      <Drawer.Screen
        name="Pokemones"
        component={MyStackPokemon}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
