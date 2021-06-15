import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from './database/firebaseDB';
import ShopBar from './ShopBar';
import ShopDetails from './ShopDetails';

export default function ShopList() {
  const [Shops, setShops] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("shops")
      .onSnapshot((collection) => {
        const updatedShops = collection.docs.map((doc) => doc.data());
        setShops(updatedShops);
      });
    return () => unsubscribe(); // unmount
  }, []);

  function renderItem({ item }) {
    return (
      <ShopBar item={item} />
    );
  }

  return (
    <View style={styles.container}>
        <FlatList
        style={{ width: "100%" }}
        data={Shops}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
