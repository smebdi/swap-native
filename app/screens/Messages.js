import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import {changeNetworkStatus} from '../actions/network';

const Messages = () => {
  const netInfo = useNetInfo();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Messages</Text>
      <Text>{netInfo ? JSON.stringify(netInfo.details) : false}</Text>
    </View>
  );
};

const ConnectedMessages = connect(null)(Messages);

export default props => (
  <AlertConsumer>
    {context => (
      <ConnectedMessages alertWithType={context.alertWithType} {...props} />
    )}
  </AlertConsumer>
);
