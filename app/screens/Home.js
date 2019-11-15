import React, {Component} from 'react';
import {Text, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import {Container} from '../components/Container';

const Home = props => {
  console.log(props.navigation);
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
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
