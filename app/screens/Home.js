import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import {changeNetworkStatus} from '../actions/network';

const Home = () => {
  const netInfo = useNetInfo();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Text>{netInfo ? JSON.stringify(netInfo.details) : false}</Text>
    </View>
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
