import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Container} from '../components/Container';

export default class Swap extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    unreadMessages: true,
  };

  renderHeader = unreadMessages => {
    return (
      <View style={style.headerContainer}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={[
              unreadMessages ? style.selectedText : null,
              style.headerTextContainer,
            ]}
            onPress={() => {
              this.setState({unreadMessages: true});
            }}>
            <Text
              style={[
                style.headerText,
                unreadMessages ? style.selectedText : null,
              ]}>
              Unread Messages
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={[
              !unreadMessages ? style.selectedText : null,
              style.headerTextContainer,
            ]}
            onPress={() => {
              this.setState({unreadMessages: false});
            }}>
            <Text
              style={[
                style.headerText,
                !unreadMessages ? style.selectedText : null,
              ]}>
              All Messages
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const {unreadMessages} = this.state;
    return (
      <Container style={{justifyContent: 'flex-start'}}>
        {this.renderHeader(unreadMessages)}
      </Container>
    );
  }
}

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: 25,
  },
  headerTextContainer: {
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
  },
  selectedText: {
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
