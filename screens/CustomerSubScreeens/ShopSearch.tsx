import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import ShopBar from './ShopBar';
import { FlatList } from 'react-native';

export default function ShopSearch() {
  const [Search, setSearch] = useState("");
  const [Shops, setShops] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("shops")
      .onSnapshot((collection) => {
        const updatedShops = collection.docs.map((doc) => doc.data());
        const shopData = updatedShops.filter(
          (shops) => {
            const shopupname = shops.ShopName.toUpperCase();
            return shopupname.indexOf(Search.toUpperCase()) > -1;
          }
        );
        setShops(shopData);
      });
    return () => unsubscribe(); // unmount
  }, [Search]);

  function renderItem({ item }) {
    return (
      <ShopBar item={item} />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{padding: 10,}}>Search for your designated shop here!</Text>
      <TextInput
        style={styles.textInput}
        value={Search}
        onChangeText={(input) => setSearch(input)}
      />
      <FlatList
        style={{ width: "100%" }}
        data={Shops}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: "80%",
    margin: 10,
    padding: 10,
  }
});
