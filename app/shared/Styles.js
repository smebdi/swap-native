import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import colors from '../config/colors';

export const {height, width} = Dimensions.get('window');
export const HEADER_HEIGHT = DeviceInfo.hasNotch() ? 60 : 40;

export default StyleSheet.create({
  header: {
    backgroundColor: colors.secondaryColor,
    height: HEADER_HEIGHT,
    borderBottomWidth: 0,
    borderColor: null,
  },
  tabBar: {
    backgroundColor: colors.secondaryColorAccent,
  },
  dropShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  shadow: {
    shadowColor: colors.primaryColorAccent,
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
