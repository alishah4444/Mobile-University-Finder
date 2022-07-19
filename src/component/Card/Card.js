import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import constants from '../../helper/constants';
import FastImage from 'react-native-fast-image';
import Style from '../../container/home/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Width = Dimensions.get('window').width;

export default function Card(props) {
  const {imageUrl, position, location, skill, jobType, salary} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', {})}
      style={{
        width: Width * 0.96,
        borderRadius: 20,
        backgroundColor: constants.color.white,
        marginVertical: 10,
        height: Width * 0.42,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={Style.imageContainer}>
            <FastImage
              style={Style.imageStyle}
              source={{
                uri: imageUrl,

                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={{marginHorizontal: 10, alignSelf: 'center'}}>
            <Text style={[Style.fontStyle, {fontSize: 16}]}>{position}</Text>
            <Text style={[Style.fontStyle, {fontWeight: '300', fontSize: 13}]}>
              {location}
            </Text>
          </View>
        </View>
        <Ionicons
          name="bookmark-outline"
          size={27}
          color={constants.color.secondary}
        />
      </View>

      <Text
        style={[
          Style.fontStyle,
          {
            color: constants.color.mainFont,
            marginHorizontal: 20,
            fontSize: 17,
            fontWeight: 'bold',
            letterSpacing: 0,
          },
        ]}>
        $ {salary}{' '}
        <Text
          style={{
            color: constants.color.mainFont,
            marginHorizontal: 20,
            fontSize: 17,
            fontWeight: '200',
          }}>
          / Mo
        </Text>
      </Text>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: constants.color.container,
            borderRadius: 10,

            width: Width * 0.35,
          }}>
          <Text
            style={[
              Style.fontStyle,
              {
                color: '#524B6B',
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 'normal',
                letterSpacing: 0,
              },
            ]}>
            {skill}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: constants.color.container,
            borderRadius: 10,
            width: Width * 0.25,
          }}>
          <Text
            style={[
              Style.fontStyle,
              {
                color: '#524B6B',
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 'normal',
                letterSpacing: 0,
              },
            ]}>
            {jobType}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#FFD6AD',
            borderRadius: 10,
            width: Width * 0.25,
          }}>
          <Text
            style={[
              Style.fontStyle,
              {
                color: '#524B6B',
                // marginHorizontal: 20,
                textAlign: 'center',

                fontSize: 17,
                fontWeight: 'normal',
                letterSpacing: 0,
              },
            ]}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
