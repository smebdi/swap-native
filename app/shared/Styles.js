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
  },
  tabbar: {
    height: HEADER_HEIGHT,
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
});
