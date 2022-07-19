import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Style from './style';
import constants from '../../helper/constants';
import Feather from 'react-native-vector-icons/Feather';
import TextInputComponent from '../../component/TextInput/TextInput';

import DocumentPicker from 'react-native-document-picker';
const Width = Dimensions.get('window').width;

export default function UploadCV() {
  const [information, setInformation] = useState('');
  return (
    <View
      style={{
        marginHorizontal: 15,
        backgroundColor: constants.color.container,
      }}>
      <Text
        style={[
          Style.fontStyle,
          {
            color: constants.color.mainFont,

            marginTop: 15,
            marginBottom: 5,
            letterSpacing: 0,
            fontSize: 18,
          },
        ]}>
        Upload CV
      </Text>
      <Text
        style={[
          Style.fontStyle,
          {
            fontSize: 14,

            textAlign: 'justify',
            fontFamily: constants.font.secondaryFont,
            fontWeight: 'normal',
          },
        ]}>
        Add your resume/CV to apply for a job.
      </Text>

      <TouchableOpacity
        style={{
          height: Width * 0.3,
          borderWidth: 1,
          borderRadius: 15,
          marginVertical: 20,
          marginBottom: 10,
          borderStyle: 'dashed',
        }}
        onPress={() => {
          DocumentPicker.pickSingle().then(document => {
            console.log('document', document);
          });
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Feather
            name="folder-plus"
            style={{alignSelf: 'center'}}
            size={27}
            color={constants.color.mainFont}
          />
          <Text style={{alignSelf: 'center', marginLeft: 10}}>
            Upload CV/Resume
          </Text>
        </View>
      </TouchableOpacity>
      <Text
        style={[
          Style.fontStyle,
          {
            color: constants.color.mainFont,

            marginTop: 10,
            marginBottom: 5,
            letterSpacing: 0,
            fontSize: 18,
          },
        ]}>
        Informations
      </Text>

      <TextInputComponent
        style={{
          height: Width * 0.55,
          alignItems: 'flex-start',
          backgroundColor: constants.color.white,
          borderRadius: 20,
          marginBottom: 20,
          padding: 20,
        }}
        onChangeText={val => setInformation(val)}
        multiline={true}
        value={information}
        placeholder={'Explain why you are the right person for this job ?'}
      />
    </View>
  );
}
