import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Styles from '../../shared/Styles';

export default class SubHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.subheader, Styles.dropShadow, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}
