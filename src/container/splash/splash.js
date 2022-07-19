import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Style from './style';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import constants from '../../helper/constants';
import FastImage from 'react-native-fast-image';

export default function SplashScreen() {
  const Width = Dimensions.get('window').width;
  const navigation = useNavigation();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.navigate('Login', {});
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <Text
        style={[
          Style.fontStyle,
          {
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'right',
            marginTop: 30,
          },
        ]}>
        University Finder
      </Text>
      <View style={{justifyContent: 'center', flex: 1}}>
        <FastImage
          style={{
            width: Width * 0.5,
            height: Width * 0.5,
            marginTop: Width / 8,
            alignSelf: 'center',
          }}
          source={{
            uri: 'https://easypaisa.com.pk/wp-content/uploads/2022/02/Ch4_11zon.png',

            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={{position: 'relative', marginTop: Width / 8}}>
          <Text style={[Style.fontStyle]}>Find Your</Text>
          <Text
            style={[
              Style.fontStyle,
              {
                color: constants.color.secondaryFont,
                textDecorationLine: 'underline',
              },
            ]}>
            Dream Job
          </Text>
          <Text style={[Style.fontStyle]}>Here !</Text>
          <Text
            style={[
              Style.fontStyle,
              {fontSize: 12, fontWeight: '300', marginTop: 10},
            ]}>
            Explore all the most exciting job roles based on your interest and
            major study
          </Text>
        </View>

        <View style={Style.nextIcon}>
          <AntDesign
            name="arrowright"
            style={{
              alignSelf: 'center',
              zIndex: 9999,
              justifyContent: 'center',
            }}
            size={35}
            color={constants.color.white}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
