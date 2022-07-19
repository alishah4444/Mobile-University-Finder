import {StyleSheet, Dimensions} from 'react-native';
import constants from '../../helper/constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Style = StyleSheet.create({
  container: {
    backgroundColor: constants.color.container,
    flex: 1,
    // justifyContent: 'center',
  },

  nextIcon: {
    position: 'absolute',
    backgroundColor: constants.color.secondary,
    width: Width / 6.5,
    height: Width / 6.5,
    justifyContent: 'center',

    bottom: 50,
    right: 30,
    borderRadius: 100,
  },

  fontStyle: {
    fontSize: Width / 10,

    color: constants.color.mainFont,
    marginHorizontal: 20,

    letterSpacing: 1,
  },
});

export default Style;
