/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {Container} from '../Container';
import colors from '../../config/colors';
const {height, width} = Dimensions.get('window');

export default class BeerDetail extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    beer: this.props.beer.beer.beer,
    brewery: this.props.beer.beer.brewery,
    loading: true,
    imgHeight: 100,
    imgWidth: 100,
    headerHeight: 225,
    hasSetHeader: 0,
    hasSetContent: 0,
  };

  componentDidMount() {
    console.log('thisbeer', this.state.beer);
    console.log('thisbrewery', this.state.brewery);

    Image.getSize(
      this.props.beer.beer.beer.beer_label,
      (imgHeight, imgWidth) => {
        this.setState({imgHeight, imgWidth, loading: true});
      },
    );
  }

  setDimensionsOfHeader = (adjustedHeight, location) => {
    const {hasSetContent, hasSetHeader, headerHeight} = this.state;
    if (location === 'header' && !this.state.hasSetHeader) {
      this.setState({
        headerHeight: headerHeight + adjustedHeight,
        hasSetHeader: hasSetHeader + 1,
      });
    }
    if (location === 'content' && hasSetContent < 3) {
      this.setState({
        headerHeight: headerHeight + adjustedHeight,
        hasSetContent: hasSetContent + 1,
      });
    }
  };

  renderImage = (imgHeight, imgWidth, uri) => {
    return (
      <View
        style={[
          {height: imgHeight + 25, width: imgWidth + 25},
          style.contentImage,
          style.shadow,
        ]}>
        <Image style={{flex: 1}} resizeMode="stretch" source={{uri}} />
      </View>
    );
  };

  renderHeader = (beer, brewery) => {
    return (
      <View>
        <Text
          h4
          style={style.header}
          onLayout={event => {
            this.setDimensionsOfHeader(
              event.nativeEvent.layout.height,
              'header',
            );
          }}>
          {beer.beer_name}
        </Text>
        <Text style={[style.header, style.subHeader]}>
          {brewery.brewery_name}
        </Text>
      </View>
    );
  };

  renderContentRow = (type, value, unit = '') => {
    if (value) {
      return (
        <View style={style.contentTextRow}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>{type}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{textAlign: 'right'}}>{value + unit}</Text>
          </View>
        </View>
      );
    } else {
      this.setDimensionsOfHeader(-15, 'content');
    }
  };

  renderDescription = (descWidth, description) => {
    return (
      <ScrollView style={{width: descWidth + 10}}>
        <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
          <Text>{description}</Text>
        </View>
      </ScrollView>
    );
  };

  render() {
    const {
      beer,
      brewery,
      imgHeight,
      imgWidth,
      headerHeight,
      loading,
    } = this.state;

    return loading ? (
      <Container style={{justifyContent: 'flex-start'}}>
        {this.renderImage(imgHeight, imgWidth, beer.beer_label)}
        <View
          style={[
            {height: headerHeight},
            style.contentHeader,
            style.shadow,
            style.rounded,
          ]}>
          {this.renderHeader(beer, brewery)}
          {this.renderContentRow('ABV', beer.beer_abv, '%')}
          {this.renderContentRow('IBU', beer.beer_ibu)}
          {this.renderContentRow('Style', beer.beer_style)}
        </View>
        {this.renderDescription(width - 60, beer.beer_description)}
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
    backgroundColor: colors.backgroundColor,
    width: width - 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
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
