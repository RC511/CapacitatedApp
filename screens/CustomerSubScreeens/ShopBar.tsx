import React from "react";
import { ImageBackground } from "react-native";
import { Card } from 'react-native-elements'
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function ShopBar({ item }) {
  return (
    <View
      style={{
        backgroundColor: '#ecf0f1',
        flexDirection:'column',
        flex:1,
        height:200,
      }}
    >
      <TouchableOpacity style={{
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        flex: 1,
        resizeMode: 'cover'}}>
        <Card containerStyle={{flexDirection:'column',borderRadius:10}}>
              
              <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                
                borderRadius:10,
                overflow:'hidden'
              }}
              source={{uri:item.image}}
              />
            {/** top-right corner */}
            <View style={{ position: 'absolute', top: 10, left: 0 }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  backgroundColor: 'white',
                }}>
                {item.CurrentVisitors}/{item.MaxVisitors}
              </Text>
            </View>
            <Text style={{position:'absolute', bottom:0,fontSize: 20, fontWeight: 'bold', paddingLeft: 3,
                          color:'white' }}>
            {item.ShopName}
          </Text>
         
          </Card>
      </TouchableOpacity>
    </View>
  );
}