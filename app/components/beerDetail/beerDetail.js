import React, {Component} from 'react';
import {Image} from 'react-native';
import {Container} from '../Container';
import {Card} from 'react-native-elements';
import colors from '../../config/colors';

export default class BeerDetail extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    beer: this.props.beer.beer.beer,
    brewery: this.props.beer.beer.brewery,
    loading: false,
  };

  componentDidMount() {
    console.log('beerDetailPropsTest', this.props);
  }

  render() {
    const {beer, brewery, loading} = this.state;
    console.log('thisbeer', beer);
    console.log('thisbrew', brewery);
    return (
      // <Container>
<Image  style={{height: 200, width: 200}}
            resizeMode="cover"
            source={{ uri: beer.beer_label }}
          />
    // </Container>
    )
  }
}
