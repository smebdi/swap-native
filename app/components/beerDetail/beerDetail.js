/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  // Text,
  ScrollView,
} from 'react-native';
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
    headerHeight: 210,
    adjustedHeight: false,
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

  getDimensionsOfText = layout => {
    if (!this.state.adjustedHeight) {
      this.setState({
        headerHeight: this.state.headerHeight + layout.height,
        adjustedHeight: true,
      });
    }
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
        <View
          style={[
            {
              height: imgHeight + 25,
              width: imgWidth + 25,
              marginTop: 25,
              marginBottom: -25,
              zIndex: 100,
            },
            style.shadow,
          ]}>
          <Image
            style={[{flex: 1}]}
            resizeMode="cover"
            source={{uri: beer.beer_label}}
          />
        </View>
        <View
          style={[
            {
              backgroundColor: 'white',
              height: headerHeight,
              width: width - 60,
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: 20,
            },
            style.shadow,
            style.rounded,
          ]}>
          <Text
            h4
            style={{textAlign: 'center', marginVertical: 10}}
            onLayout={event => {
              this.getDimensionsOfText(event.nativeEvent.layout);
            }}>
            {beer.beer_name}
          </Text>
          <Text style={{marginVertical: 5, fontWeight: '500'}}>
            {brewery.brewery_name}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
              marginVertical: 10,
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text>ABV</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'right'}}>{beer.beer_abv}%</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
              marginVertical: 10,
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text>IBU</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'right'}}>{beer.beer_ibu}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 25,
              marginVertical: 10,
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text>Style</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'right'}}>{beer.beer_style}</Text>
            </View>
          </View>
        </View>

        <ScrollView style={[{height: 100, width: width - 60}, style.shadow]}>
          <View style={{paddingVertical: 20}}>
            <Text>{beer.beer_description}</Text>
          </View>
        </ScrollView>
      </Container>
    ) : null;
  }
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
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
});
