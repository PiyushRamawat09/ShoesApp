import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MenuIcon from '../Assets/SVG/MenuIcon';
import OptionIcon from '../Assets/SVG/OptionIcon';
import {mobileH, mobileW} from '../configProvider';
import {Font} from '../Fonts';
import ProductCard from '../Components/ProductCard';
import {productData} from '../Data/ProductData';
import Animated, {FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigate("ProductDetail", {data : item})}>
        <ProductCard item={item} />
      </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        translucent={false}
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        backgroundColor="#ffffff"
      />
      <SafeAreaView />

      {/* header */}
      <View style={styles.header}>

        <Animated.View entering={FadeInRight.delay(100).duration(400)}>
        <MenuIcon />
        </Animated.View>

        <Animated.View entering={FadeInLeft.delay(100).duration(400)}>
        <OptionIcon />
        </Animated.View>
         
      </View>

      {/* tilte */}

      <View style={styles.bodyContainer}>
        <Animated.Text entering={FadeInLeft.delay(200).duration(500)} style={styles.title}>Nike Shoes</Animated.Text>
        <Animated.Text entering={FadeInLeft.delay(200).duration(500)} style={styles.subTitle}>Product of your Choice</Animated.Text>
      </View>

      <FlatList
        data={productData}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle = {styles.contentContainerStyle}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: (mobileW * 5) / 100,
    marginTop: (mobileH * 1) / 100,
  },
  bodyContainer: {
    paddingHorizontal: (mobileW * 5) / 100,
    marginTop: (mobileH * 2) / 100,
  },

  title: {
    color: '#000',
    fontSize: (mobileW * 6) / 100,
    fontFamily: Font.FontBold,
  },

  subTitle: {
    color: '#000',
    fontSize: (mobileW * 4) / 100,
    fontFamily: Font.FontSemiBold,
  },
  contentContainerStyle : {
    alignItems : "center",
    paddingBottom : mobileH * 5/100
  }
});
