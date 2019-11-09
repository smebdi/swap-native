import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import {Container} from '../components/Container';

const Home = props => {
  console.log(props.navigation);
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

const ConnectedHome = connect(null)(Home);

export default props => (
  <AlertConsumer>
    {context => (
      <ConnectedHome alertWithType={context.alertWithType} {...props} />
    )}
  </AlertConsumer>
);
