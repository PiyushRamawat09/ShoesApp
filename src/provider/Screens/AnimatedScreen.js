import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const AnimatedScreen = () => {
  return (
    <View style={style.container}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'tomato',
        }}></View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          marginTop: 20,
          width: 200,
          height: 50,
          backgroundColor: 'teal',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#fdada8',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Start Animations
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AnimatedScreen;


// animation reference
// https://reactnative.dev/docs/animations

