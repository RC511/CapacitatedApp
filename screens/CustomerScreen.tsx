import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShopList from './CustomerSubScreeens/ShopList';
import ShopSearch from './CustomerSubScreeens/ShopSearch';
import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import ShopDetails from './CustomerSubScreeens/ShopDetails';

const CustomTab = createBottomTabNavigator();

export default function CustomerScreen() {
  return (
    <CustomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Shops') {
           iconName = 'shop';
          } else if (route.name === 'Search') {
            iconName = 'magnifying-glass';
          }

          // You can return any component that you like here!
          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <CustomTab.Screen name="Shops" component={ShopList} />
      <CustomTab.Screen name="Search" component={ShopSearch} />
    </CustomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
