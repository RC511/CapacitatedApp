import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomerScreen from './screens/CustomerScreen';

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Customers" component={CustomerScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Owo" onPress={() => navigation.navigate("Customers")}></Button>
    </View>
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
