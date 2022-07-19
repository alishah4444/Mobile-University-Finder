import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../container/home/home';
import ProfileScreen from '../../container/profile/profile';
import MessageScreen from '../../container/message/message';
import Constants from '../../helper/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contants from '../../helper/constants';

const Tab = createBottomTabNavigator();
export default BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: Contants.color.secondaryFont,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ar => (
            <AntDesign
              name="home"
              size={25}
              color={
                ar.focused
                  ? Constants.color.secondaryFont
                  : Constants.color.secondary
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ar => (
            <AntDesign
              name="sharealt"
              size={25}
              color={
                ar.focused
                  ? Constants.color.secondaryFont
                  : Constants.color.secondary
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarIcon: ar => (
            <AntDesign
              name="pluscircle"
              size={35}
              color={
                ar.focused
                  ? Constants.color.secondaryFont
                  : Constants.color.secondary
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="message"
        component={MessageScreen}
        options={{
          tabBarIcon: ar => (
            <Ionicons
              name="chatbox-outline"
              size={27}
              color={
                ar.focused
                  ? Constants.color.secondaryFont
                  : Constants.color.secondary
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={ProfileScreen}
        options={{
          tabBarIcon: ar => (
            <Ionicons
              name="bookmark-outline"
              size={27}
              color={
                ar.focused
                  ? Constants.color.secondaryFont
                  : Constants.color.secondary
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//
