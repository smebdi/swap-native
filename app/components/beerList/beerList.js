import React, {Component} from 'react';
import {View, Platform, FlatList} from 'react-native';
import {Container} from '../Container';
import {Button, ListItem, SearchBar} from 'react-native-elements';
import colors from '../../config/colors';

export default class BeerList extends Component {
  constructor(props) {
    super(props);
    props.clearBeerList();
    props.clearBeerDetail();
  }

  state = {
    search: '',
    data: this.props.beer.beerList,
    loading: false,
  };

  componentDidMount() {
    console.log('beerlistprops', this.props);
    return true;
  }

  updateSearch = search => {
    this.setState({search});
  };

  executeSearch = () => {
    let {search} = this.state;
    const {getBeerListFromQuery} = this.props;
    this.setState({loading: true});
    getBeerListFromQuery(search).then(data => {
      this.setState({
        loading: false,
        data: this.props.beer.beerList,
      });
    });
  };

  handleBeerPress = beer => {
    const {setBeerFromSearch} = this.props;
    setBeerFromSearch(beer);
    this.props.navigation.navigate('Detail');
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      title={item.beer.beer_name}
      subtitle={item.brewery.brewery_name}
      leftAvatar={{source: {uri: item.beer.beer_label}}}
      onPress={() => this.handleBeerPress(item)}
      bottomDivider
      chevron
      isVisible={true}
    />
  );

  renderHeader = (search, data, loading) => {
    return (
      <View>
        <Container>
          <SearchBar
            ref={searchbar => (this.search = searchbar)}
            value={search}
            placeholder="Find beer or breweries"
            onChangeText={this.updateSearch}
            onBlur={() => 'blur'}
            platform={Platform.OS === 'ios' ? 'ios' : 'android'}
            inputContainerStyle={{backgroundColor: colors.backgroundColor}}
          />
        </Container>
        {search && !data.length && !loading ? (
          <Button
            title="Search"
            type="clear"
            onPress={() => this.executeSearch()}
          />
        ) : null}
      </View>
    );
  };

  render() {
    const {data, search, loading} = this.state;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader(search, data, loading)}
        onEndReachedThreshold={0.5}
      />
    );
  }
}
