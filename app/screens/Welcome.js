import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import {Container} from '../components/Container';

const Welcome = props => {
  console.log(props.navigation);
  return (
    <Container>
      <Text>Swap the Hop</Text>
      <Button
        title="Press me"
        onPress={() => props.navigation.navigate('Stack')}
      />
    </Container>
  );
};

const ConnectedWelcome = connect(null)(Welcome);

export default props => (
  <AlertConsumer>
    {context => (
      <ConnectedWelcome alertWithType={context.alertWithType} {...props} />
    )}
  </AlertConsumer>
);
