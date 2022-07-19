import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Style from './style';
import JobCard from '../../component/Card/JobCard';
import Contants from '../../helper/constants';

export default function ProfileScreen() {
  const [visible, setVisible] = useState(false);
  const renderItem = () => {
    return (
      <TouchableOpacity onPress={() => setVisible(true)}>
        <JobCard />
      </TouchableOpacity>
    );
  };

  const headerRender = () => {
    return (
      <View style={Style.header}>
        <Text style={Style.heading}>Saved Job</Text>
        {/* <Text
          style={[
            {
              textAlign: 'right',
              alignSelf: 'center',
              fontSize: 14,
              color: Contants.color.secondaryFont,
            },
          ]}>
          Delete all
        </Text> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={Style.container}>
      <FlatList
        data={[
          {title: 'Apple Developer'},
          {title: 'Apple Developer'},
          {title: 'Apple Developer'},
        ]}
        ListHeaderComponent={headerRender}
        renderItem={renderItem}
      />

      <Modal
        style={{
          backgroundColor: Contants.color.white,
          flex: 1,
          justifyContent: 'flex-end',
          height: 40,
        }}
        transparent={true}
        visible={visible}>
        <View
          style={{
            backgroundColor: Contants.color.white,
            height: '40%',
            marginTop: 'auto',
            marginBottom: 70,
          }}></View>
      </Modal>
    </SafeAreaView>
  );
}
