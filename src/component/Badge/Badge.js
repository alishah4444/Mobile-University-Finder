import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from '../../container/profile/style';

export default function Badge(props) {
  return (
    <TouchableOpacity style={Style.badgeStyle}>
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
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
