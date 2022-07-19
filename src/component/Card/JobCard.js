import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Contants from '../../helper/constants';
import FastImage from 'react-native-fast-image';
import Style from '../../container/profile/style';
import Entypo from 'react-native-vector-icons/Entypo';
import Badge from '../Badge/Badge';
const Width = Dimensions.get('window').width;

export default function JobCard() {
  const navigation = useNavigation();

  return (
    <View
      // onPress={() => navigation.navigate('DetailScreen', {})}
      style={{
        borderRadius: 20,
        backgroundColor: Contants.color.white,
        marginVertical: 10,
        height: Width * 0.55,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          // flex: 1,
          margin: 20,
        }}>
        <View style={Style.imageContainer}>
          <FastImage
            style={Style.imageStyle}
            source={{
              uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-logo-icons-31.png',

              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Entypo
          name="dots-three-vertical"
          style={{alignSelf: 'center'}}
          size={27}
          onPress={() => {}}
          color={Contants.color.secondary}
        />
      </View>

      <View style={{marginHorizontal: 20}}>
        <Text style={[Style.fontStyle, {fontSize: 16}]}>UI/UX Designer</Text>
        <Text style={[Style.fontStyle, {fontWeight: '300', fontSize: 13}]}>
          Google inc . California USA
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginVertical: 15,
        }}>
        <Badge title={'Design'} />
        <Badge title={'Full-Time'} />
        <Badge title={'Senior Designer'} />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',

          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <Text style={[Style.fontStyle, {fontWeight: '300', fontSize: 13}]}>
          25 minute ago
        </Text>
        <Text style={[Style.fontStyle, {fontWeight: 'bold', fontSize: 16}]}>
          $15k
          <Text style={[Style.fontStyle, {fontWeight: '300', fontSize: 16}]}>
            /Mo
          </Text>
        </Text>
      </View>
    </View>
  );
}
