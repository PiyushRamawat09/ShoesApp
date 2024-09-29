import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {mobileH, mobileW} from '../configProvider';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const {navigate} = useNavigation();
  setTimeout(() => navigate("Home"), 3000);

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        translucent={false}
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        backgroundColor="#24a8af"
      />
      <LottieView
        style={{
          width: (mobileW * 80) / 100,
          height: (mobileW * 80) / 100,
        }}
        source={{
          uri: 'https://lottie.host/d22eb22d-ca59-4686-9ac8-2d4ea13970b3/7iHgu1JgBC.json',
        }}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24a8af',
  },
});

export default SplashScreen;
