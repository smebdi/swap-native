/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {Container} from '../Container';
import colors from '../../config/colors';
const {height, width} = Dimensions.get('window');

const defaultImage =
  'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198-300x300.jpg';

export default class profileDetail extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    profile: this.props.profile || {},
    loading: true,
    imgHeight: 125,
    imgWidth: 125,
    headerHeight: 150,
    adjustedHeight: false,
  };

  componentDidMount() {}

  getDimensionsOfText = layout => {
    if (!this.state.adjustedHeight) {
      this.setState({
        headerHeight: this.state.headerHeight + layout.height,
        adjustedHeight: true,
      });
    }
  };

  renderImage = (imgHeight, imgWidth, uri = defaultImage) => {
    return (
      <View
        style={[
          {height: imgHeight, width: imgWidth},
          style.contentImage,
          style.shadow,
        ]}>
        <Image style={{flex: 1}} resizeMode="cover" source={{uri}} />
      </View>
    );
  };

  renderHeader = (headerText, subHeaderText) => {
    return (
      <View>
        <Text h4 style={style.header}>
          {headerText}
        </Text>
        {subHeaderText ? (
          <Text style={[style.header, style.subHeader]}>{subHeaderText}</Text>
        ) : null}
      </View>
    );
  };

  renderContentRow = (type, value, unit = '') => {
    return value ? (
      <View style={style.contentTextRow}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>{type}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'right'}}>{value + unit}</Text>
        </View>
      </View>
    ) : null;
  };

  renderDescription = (descWidth, description) => {
    return (
      <ScrollView style={[{width: descWidth}, style.shadow]}>
        <View style={{paddingVertical: 20}}>
          <Text>{description}</Text>
        </View>
      </ScrollView>
    );
  };

  render() {
    const {profile, imgHeight, imgWidth, headerHeight, loading} = this.state;

    return loading ? (
      <Container style={{justifyContent: 'flex-start'}}>
        {this.renderImage(imgHeight, imgWidth, profile.profile_label)}

        <View
          style={[
            style.contentHeader,
            style.shadow,
            style.rounded,
            {height: headerHeight},
          ]}>
          {this.renderHeader(profile.username, profile.fullName)}
        </View>

        <View
          style={[
            style.contentHeader,
            style.shadow,
            style.rounded,
            {height: headerHeight, justifyContent: 'flex-start'},
          ]}>
          {this.renderHeader('Breweries', profile.fullName)}
        </View>

        {this.renderDescription(width - 60, profile.profile_description)}
      </Container>
    ) : null;
  }
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: colors.primaryColorAccent,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rounded: {
    borderRadius: 8,
  },
  contentImage: {
    marginTop: 25,
    marginBottom: -25,
    zIndex: 100,
  },
  contentHeader: {
    backgroundColor: 'white',
    width: width - 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    marginVertical: 5,
  },
  contentTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  subHeader: {
    marginVertical: 5,
    fontWeight: '500',
  },
  header: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
