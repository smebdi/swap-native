import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  subheader: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: colors.secondaryColor,
    height: 40,
    marginBottom: 20,
    zIndex: 500,
  },
});
