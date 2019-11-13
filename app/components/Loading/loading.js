import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from '../Container';
import color from '../../config/colors';

export default class LoadingIndicator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={color.primaryColor} />
      </Container>
    );
  }
}
