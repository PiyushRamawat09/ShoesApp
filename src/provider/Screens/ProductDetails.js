import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {mobileH, mobileW} from '../configProvider';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from '../Assets/SVG/BackIcon';
import HeartIcon from '../Assets/SVG/HeartIcon';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Font} from '../Fonts';
import {SuggestedProducts} from '../Data/SuggestedProduct';
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';

const ProductDetail = () => {
  const [isFav, setIsFav] = useState(false);
  const {params} = useRoute();
  const {goBack} = useNavigation();
  const data = params?.data;
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        translucent={false}
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        backgroundColor="lightgrey"
      />

      {/* header */}

      <View style={styles.graybackground}>
        <SafeAreaView />
        {/* Icons */}
        <View style={styles.Iconcontainer}>
        <Animated.View entering={FadeInRight.delay(100).duration(500)}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconBox}
            onPress={() => goBack()}>
            <BackIcon />
          </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInLeft.delay(100).duration(500)}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconBox}
            onPress={() => setIsFav(!isFav)}>
            <HeartIcon isFav={isFav} />
          </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Image */}
        <Animated.Image  sharedTransitionTag={`T${data.id}`} source={data.thumbnail} style={styles.image}></Animated.Image>
      </View>

      {/* body */}

      <View style={styles.bodyContainer}>
        <View style={styles.box}>
          <Animated.Text entering={FadeInLeft.delay(200).duration(500)} style={styles.title}>{data.title}</Animated.Text>

          <View style={styles.innerBox}>
            <Animated.Text entering={FadeInRight.delay(200).duration(500)} style={styles.price}>
              <Text style={styles.currency}>$</Text> {data.price}
            </Animated.Text>

            <Animated.Text entering={FadeInRight.delay(200).duration(500)} style={styles.rating}>⭐ {data.rating}</Animated.Text>
          </View>
        </View>

        {/* description */}

        <Animated.Text entering={FadeInLeft.delay(300).duration(500)} style={styles.description}>{data.description}</Animated.Text>

        <Animated.View entering={FadeInLeft.delay(300).duration(500)}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <Text style={styles.btnText}>Shop Now</Text>
        </TouchableOpacity>
        </Animated.View>

     

        {/* suggested products */}

        <Animated.Text entering={FadeInLeft.delay(300).duration(500)} style={styles.suggestedTitle}>Suggested Products</Animated.Text>

       <View style = {{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
       }}>


        {SuggestedProducts.map((value, index) => {
          return (
            <Animated.View entering={FadeInDown.delay(300).duration(600)} key={value.id.toString()}>
              <Image
                source={value.thumbnail}
                style={styles.suggestedImage}></Image>
              <Text style={styles.titleText}>{value.title}</Text>
            </Animated.View>
          );
        })}
       </View>

      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  graybackground: {
    height: (mobileH * 33) / 100,
    borderBottomLeftRadius: (mobileW * 12) / 100,
    borderBottomRightRadius: (mobileW * 12) / 100,
    backgroundColor: 'lightgrey',
  },

  Iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: (mobileW * 5) / 100,
    marginTop: (mobileH * 2) / 100,
  },

  iconBox: {
    backgroundColor: '#fff',
    height: (mobileW * 10) / 100,
    width: (mobileW * 10) / 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (mobileW * 30) / 100,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: (mobileW * 88) / 100,
    height: (mobileH * 25) / 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bodyContainer: {
    paddingHorizontal: (mobileW * 5) / 100,
    marginTop: (mobileH * 2) / 100,
  },

  title: {
    color: '#000',
    fontSize: (mobileW * 5) / 100,
    fontFamily: Font.FontBold,
  },
  price: {
    color: '#000',
    fontSize: (mobileW * 4.5) / 100,
    fontFamily: Font.FontBold,
  },

  currency: {
    color: '#24a8af',
  },

  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rating: {
    color: '#000',
    fontSize: (mobileW * 4) / 100,
    fontFamily: Font.FontBold,
  },

  innerBox: {
    alignItems: 'center',
  },

  description: {
    fontSize: (mobileW * 3.8) / 100,
    color: '#000',
    fontFamily: Font.FontRegular,
    textAlign: 'justify',
    marginVertical: (mobileH * 3) / 100,
    
  },

  btn: {
    backgroundColor: '#24a8af',
    alignItems: 'center',
    borderRadius: (mobileW * 30) / 100,
    paddingVertical: (mobileH * 1) / 100,
    width: (mobileW * 30) / 100,
  },

  btnText: {
    color: '#fff',
    fontSize: (mobileW * 4.5) / 100,
    fontFamily: Font.FontSemiBold,
  },

  suggestedTitle: {
    color: '#000',
    fontSize: (mobileW * 5) / 100,
    fontFamily: Font.FontBold,
    marginTop: (mobileH * 2) / 100,
  },

  suggestedImage: {
    height: (mobileH * 10) / 100,
    width: (mobileW * 25) / 100,
    resizeMode: 'contain',
    alignSelf : 'center',
    marginTop : mobileH * 0.5/100
  },

  titleText: {
    color: '#000',
    fontSize: (mobileW * 4) / 100,
    fontFamily: Font.FontBold,
    textAlign : 'center'
  },
});
