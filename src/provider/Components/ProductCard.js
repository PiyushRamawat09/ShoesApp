import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {mobileW} from '../configProvider';
import {Font} from '../Fonts';
import Animated from 'react-native-reanimated';

const ProductCard = ({item}) => {
  return (
    <View style={styles.mainBox}>
      <Animated.Image
      sharedTransitionTag={`T${item.id}`}
        source={item.thumbnail}
        style={styles.image}></Animated.Image>
      <Text style={styles.price}>
        <Text style={styles.currency}>$</Text> {item.price}
      </Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    alignItems: 'center',
    padding : mobileW * 4/100,
    margin : mobileW * 1/100,
  },
  image: {
    width: (mobileW * 38) / 100,
    height: (mobileW * 38) / 100,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontSize: (mobileW * 4) / 100,
    fontFamily: Font.FontSemiBold,
  },
  price: {
    color: '#000',
    fontSize: (mobileW * 3.5) / 100,
    fontFamily: Font.FontSemiBold,
  },

  currency: {
    color: '#24a8af',
  },
});
