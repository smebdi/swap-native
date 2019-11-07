import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import {changeNetworkStatus} from '../actions/network';

const Profile = () => {
  console.log(useNetInfo().details);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
      <Text>Connected: {useNetInfo().isConnected.toString()}</Text>
    </View>
  );
};

const ConnectedProfile = connect(null)(Profile);

export default props => (
  <AlertConsumer>
    {context => (
      <ConnectedProfile alertWithType={context.alertWithType} {...props} />
    )}
  </AlertConsumer>
);
