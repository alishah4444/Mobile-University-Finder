import {StyleSheet, Dimensions} from 'react-native';
import constants from '../../helper/constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Style = StyleSheet.create({
  container: {
    backgroundColor: constants.color.container,
    marginHorizontal: 20,
    flex: 1,
  },

  heading: {
    fontSize: Width / 17,

    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  fontStyle: {
    fontSize: Width / 20,
    fontWeight: 'bold',
    color: constants.color.mainFont,
    letterSpacing: 1,
  },
  imageStyle: {
    width: 30,
    height: 30,
    flex: 1,
    alignSelf: 'center',

    justifyContent: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: constants.color.container,
  },
  badgeStyle: {
    padding: 10,
    backgroundColor: constants.color.container,
    borderRadius: 10,
  },
});

export default Style;
