import {View, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import constants from '../../helper/constants';
import FastImage from 'react-native-fast-image';
import Button from '../../component/Button/Button';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UploadCV from './uploadCV';
const Width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function DetailScreen() {
  const navigation = useNavigation();
  const [information, setInformation] = useState([
    {
      title: 'Position',
      value: 'Senior Designer',
    },
    {
      title: 'Qualifications',
      value: 'Master in Computer Science',
    },
    {
      title: 'Experience',
      value: '4 Year',
    },
    {
      title: 'Job Type',
      value: 'Full-Time',
    },
    {
      title: 'Specialization',
      value: 'Design',
    },
  ]);
  const [companyInfo, setCompanyInfo] = useState([
    {
      title: 'About Company',
      value: `The Company is known for its complusion act of distributed product, named plentys.pk ributed product, named plentys.pkributed product, named plentys.pkributed product, named plentys.pkributed product, named plentys.pkributed product, named plentys.pkributed product, named plentys.pkributed product, named plentys.pk`,
    },
    {
      title: 'Website',
      value: 'www.plentys.pk',
    },
    {
      title: 'Industry',
      value: 'e-commerce',
    },
    {
      title: 'Employee Size',
      value: '131,353 Employees',
    },
    {
      title: 'Head Office',
      value: 'Tariq Road PECH 5 Karachi, Pakistan',
    },
    {
      title: 'Type',
      value: 'Multinational Company',
    },
    {
      title: 'Since',
      value: '2020',
    },
  ]);

  const [facilities, setFacilities] = useState([
    'Medical',
    'Dental',
    'Technical Certificate',
    'Meal Allowance',
    'Transport Allowance',
    'Regular Hour',
    'Monday - Friday',
  ]);
  const [toggleState, setToggleState] = useState(false);
  const [applyNow, setApplyNow] = useState(false);
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <View style={[Style.header, {height: height / 6}]}>
          <AntDesign
            name="arrowleft"
            size={27}
            onPress={() => navigation.goBack()}
            color={constants.color.secondary}
          />
          <Entypo
            name="dots-three-vertical"
            size={27}
            color={constants.color.secondary}
          />
        </View>

        <View
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            zIndex: 999,
            backgroundColor: '#AFECFE',
            top: 80,
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flex: 1,
          }}>
          <FastImage
            style={{
              width: 80,
              height: 80,

              flex: 1,
              alignSelf: 'center',

              justifyContent: 'center',
            }}
            source={require('../../image/googleicon.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View
          style={[
            Style.header,
            {
              //   height: height / 6,
              flex: 1,

              backgroundColor: constants.color.primary,
              justifyContent: 'center',
              flexDirection: 'column',
              //   alignItems: 'center',
            },
          ]}>
          <Text
            style={[
              Style.fontStyle,
              {fontSize: 16, textAlign: 'center', marginVertical: 5},
            ]}>
            UI/UX Designer
          </Text>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',

              marginTop: 10,
              flex: 1,
            }}>
            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 16,
                  textAlign: 'center',
                  marginVertical: 5,
                  alignSelf: 'center',
                  fontWeight: 'normal',
                },
              ]}>
              Google
            </Text>
            <Entypo
              name="dot-single"
              size={27}
              color={constants.color.secondary}
            />

            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 16,
                  textAlign: 'center',
                  marginVertical: 5,
                  fontWeight: 'normal',
                },
              ]}>
              California
            </Text>
            <Entypo
              name="dot-single"
              size={27}
              color={constants.color.secondary}
            />
            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 16,
                  textAlign: 'center',
                  marginVertical: 5,
                  fontWeight: 'normal',
                },
              ]}>
              1 day ago
            </Text>
          </View>
        </View>

        {!applyNow && (
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              paddingHorizontal: Width / 20,
            }}>
            <Button
              label="Description"
              buttonStyle={[
                Style.button,
                {
                  width: Width * 0.45,
                  marginHorizontal: 5,
                  paddingvertical: 5,
                  padding: 15,
                },
              ]}
              handleEvent={() => setToggleState(false)}
              buttonLabelStyle={Style.bottonLabel}
            />
            <Button
              label="Company"
              buttonStyle={[
                Style.button,
                {
                  padding: 15,
                  width: Width * 0.45,
                  marginHorizontal: 5,
                  backgroundColor: constants.color.button,
                },
              ]}
              buttonLabelStyle={[
                Style.bottonLabel,
                {color: constants.color.mainFont},
              ]}
              handleEvent={() => setToggleState(true)}
            />

            {/* <Text
            style={[
              Style.fontStyle,
              {
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 5,
                alignSelf: 'center',
                fontWeight: 'normal',
              },
            ]}>
            $ 100k/Mon
          </Text>

          <Text
            style={[
              Style.fontStyle,
              {
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 5,
                fontWeight: 'normal',
              },
            ]}>
            UI Designer
          </Text>

          <Text
            style={[
              Style.fontStyle,
              {
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 5,
                fontWeight: 'normal',
              },
            ]}>
            Junior Designer
          </Text> */}
          </View>
        )}

        {!toggleState && (
          <>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: constants.color.mainFont,
                  marginHorizontal: 15,
                  marginTop: 15,
                  marginBottom: 5,
                  letterSpacing: 0,
                  fontSize: 18,
                },
              ]}>
              Job Description
            </Text>
            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 12,
                  marginHorizontal: 15,
                  textAlign: 'justify',

                  fontWeight: 'normal',
                  fontFamily: constants.font.secondaryFont,
                },
              ]}>
              Junio r Des igner unior Desi gner unior Design erunior Des
              ignerunior Designer unior De signe runior Des igne runior Designe
              runior Designerunior Designer unior Designerunior Desig nerunior
              Designerunior Designerunior Designeru nior Desi gnerunior si
              gnerunior Design erunior Designerunior Designerunior Designer
            </Text>
            <Button
              label="Read More"
              buttonStyle={[
                Style.button,
                {
                  padding: 10,
                  marginTop: 10,
                  backgroundColor: constants.color.button,
                  width: Width * 0.3,
                  alignSelf: 'flex-start',
                },
              ]}
              buttonLabelStyle={[
                Style.bottonLabel,
                {color: constants.color.mainFont, fontWeight: 'normal'},
              ]}
            />
            <Text
              style={[
                Style.fontStyle,
                {
                  color: constants.color.mainFont,
                  marginHorizontal: 15,
                  marginTop: 15,
                  marginBottom: 5,
                  letterSpacing: 0,
                  fontSize: 18,
                },
              ]}>
              Requirements
            </Text>
            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 12,
                  marginHorizontal: 15,
                  textAlign: 'justify',
                  fontFamily: constants.font.secondaryFont,
                  fontWeight: 'normal',
                },
              ]}>
              1. Junio r Des igner unior Desi gner uniorr unior Desi gner uniorr
              unior Desi gner unior Design erunior Des {'\n'}
              {'\n'}
              2. Junio r Des igner unior Desi gner unior Der unior Desi gner
              uniorr unior Desi gner uniorsign erunior Des {'\n'}
              {'\n'}3. Junio r Des igner unior Desi gner ur unior Desi gner
              uniorr unior Desi gner uniorr unior Desi gner uniorr unior Desi
              gner uniornior Design erunior Des {'\n'}
              {'\n'}4. Junio r Des igner unisi gner uniorunior Design erunior
              Des {'\n'}
            </Text>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: constants.color.mainFont,
                  marginHorizontal: 15,
                  marginTop: 15,
                  marginBottom: 5,
                  letterSpacing: 0,
                  fontSize: 18,
                },
              ]}>
              Location
            </Text>
            <Text
              style={[
                Style.fontStyle,
                {
                  fontSize: 12,
                  marginHorizontal: 15,
                  textAlign: 'justify',
                  fontFamily: constants.font.secondaryFont,
                  fontWeight: 'normal',
                },
              ]}>
              san Antonio, California University, California USA.
            </Text>
            <MapView
              loadingEnabled
              style={{
                height: Width / 2.5,
                width: Width * 0.94,
                margin: 10,
                borderRadius: 10,

                justifyContent: 'center',
                alignSelf: 'center',
              }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </>
        )}

        {!toggleState && (
          <Text
            style={[
              Style.fontStyle,
              {
                color: constants.color.mainFont,
                marginHorizontal: 15,
                marginTop: 15,
                marginBottom: 5,
                letterSpacing: 0,
                fontSize: 18,
              },
            ]}>
            Informations
          </Text>
        )}

        {((!applyNow && (!toggleState ? information : companyInfo)) || []).map(
          (item, index) => {
            return (
              <View key={item.title + index}>
                <Text
                  style={[
                    Style.fontStyle,
                    {
                      color: constants.color.mainFont,
                      marginHorizontal: 15,
                      marginTop: 15,
                      marginBottom: 5,
                      letterSpacing: 0,
                      fontSize: 16,
                    },
                  ]}>
                  {item.title}
                </Text>
                <Text
                  style={[
                    Style.fontStyle,
                    {
                      fontSize: 14,
                      marginHorizontal: 15,
                      textAlign: 'justify',
                      fontFamily: constants.font.secondaryFont,
                      fontWeight: 'normal',
                    },
                  ]}>
                  {item.value}
                </Text>
              </View>
            );
          },
        )}
        {!toggleState && (
          <Text
            style={[
              Style.fontStyle,
              {
                color: constants.color.mainFont,
                marginHorizontal: 15,
                marginTop: 15,
                marginBottom: 5,
                letterSpacing: 0,
                fontSize: 18,
              },
            ]}>
            Facilities and Others
          </Text>
        )}

        {toggleState && !applyNow && (
          <View style={{marginBottom: 10}}>
            <Text
              style={[
                Style.fontStyle,
                {
                  color: constants.color.mainFont,
                  marginHorizontal: 15,
                  marginTop: 15,
                  marginBottom: 10,
                  letterSpacing: 0,
                  fontSize: 16,
                },
              ]}>
              Company Gallery
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <FastImage
                style={{
                  width: Width * 0.43,
                  height: Width * 0.4,
                  borderRadius: 15,

                  alignSelf: 'center',

                  justifyContent: 'center',
                }}
                source={{
                  uri: 'https://i0.wp.com/businessday.ng/wp-content/uploads/2019/11/Untitled-design-7.png?fit=600%2C400&ssl=1',

                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />

              <FastImage
                style={{
                  width: Width * 0.43,
                  height: Width * 0.4,
                  borderRadius: 15,
                  opacity: 0.6,

                  alignSelf: 'center',

                  justifyContent: 'center',
                }}
                source={{
                  uri: 'https://i0.wp.com/businessday.ng/wp-content/uploads/2019/11/Untitled-design-7.png?fit=600%2C400&ssl=1',

                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}></FastImage>
              <Text
                style={[
                  Style.fontStyle,
                  {
                    color: constants.color.mainFont,
                    marginHorizontal: 15,
                    position: 'absolute',

                    right: 20,
                    top: 80,
                    fontSize: 18,
                  },
                ]}>
                + 5 Images
              </Text>
            </View>
          </View>
        )}

        {!toggleState &&
          facilities.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 5,
                  alignItems: 'center',
                }}
                key={index + item}>
                <Entypo
                  name="dot-single"
                  size={27}
                  color={constants.color.secondary}
                />
                <Text
                  style={[
                    Style.fontStyle,
                    {
                      fontSize: 14,

                      textAlign: 'center',
                      marginLeft: 5,
                      fontFamily: constants.font.secondaryFont,
                      fontWeight: 'normal',
                    },
                  ]}>
                  {item}
                </Text>
              </View>
            );
          })}
        {applyNow && <UploadCV />}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {!applyNow && toggleState && (
            <Ionicons
              name="bookmark-outline"
              size={35}
              color={constants.color.secondaryFont}
            />
          )}
          <Button
            label="APPLY NOW"
            buttonStyle={Style.button}
            buttonLabelStyle={Style.bottonLabel}
            handleEvent={() => setApplyNow(true)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
