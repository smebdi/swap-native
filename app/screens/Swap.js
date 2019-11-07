import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import {changeNetworkStatus} from '../actions/network';

const Swap = () => {
  console.log(useNetInfo().details);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Swap</Text>
      <Text>Connected: {useNetInfo().isConnected.toString()}</Text>
    </View>
  );
};

const ConnectedSwap = connect(null)(Swap);

export default props => (
  <AlertConsumer>
    {context => (
      <ConnectedSwap alertWithType={context.alertWithType} {...props} />
    )}
  </AlertConsumer>
);
