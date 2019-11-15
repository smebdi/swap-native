import React, {Component} from 'react';
import {View, Platform, FlatList, Keyboard, StyleSheet} from 'react-native';
import {Container} from '../Container';
import {Button, ListItem, SearchBar} from 'react-native-elements';
import colors from '../../config/colors';
import LoadingIndicator from '../Loading/loading';
import styles from '../Alert/styles';

export default class BeerList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    search: '',
    data: [],
    loading: false,
  };

  componentDidMount() {
    console.log('beerlistprops', this.props);
  }

  updateSearch = search => {
    search ? this.setState({search}) : this.setState({search, data: []});
  };

  executeSearch = () => {
    let {search} = this.state;
    const {getBeerListFromQuery} = this.props;

    this.setState({loading: true});
    Keyboard.dismiss();
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
      topDivider
      chevron
      isVisible={true}
      containerStyle={{backgroundColor: colors.secondaryColor}}
    />
  );

  renderSearchBar = search => {
    return (
      <SearchBar
        ref={searchbar => (this.search = searchbar)}
        value={search}
        placeholder="Find beer or breweries"
        onChangeText={this.updateSearch}
        onBlur={() => 'blur'}
        cancelButtonProps={{buttonStyle: null}}
        cancelButtonTitle={''}
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        inputContainerStyle={{backgroundColor: colors.backgroundColor}}
        containerStyle={style.searchBarContainer}
      />
    );
  };

  renderHeader = (search, data, loading) => {
    return (
      <View>
        <Container>{this.renderSearchBar(search)}</Container>
        {search && !data.length && !loading ? (
          <Container>
            <Button
              buttonStyle={style.buttonStyle}
              titleStyle={style.buttonTitleStyle}
              title="Search"
              raised
              onPress={() => this.executeSearch()}
            />
          </Container>
        ) : null}
      </View>
    );
  };

  render() {
    const {data, search, loading} = this.state;
    return loading ? (
      <Container style={{justifyContent: 'flex-start'}}>
        {this.renderSearchBar(search)}
        <LoadingIndicator />
      </Container>
    ) : (
      <FlatList
        backgroundColor={colors.secondaryColor}
        keyboardShouldPersistTaps="always"
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader(search, data, loading)}
        onEndReachedThreshold={0.5}
        stickyHeaderIndices={[0]}
      />
    );
  }
}

const style = StyleSheet.create({
  buttonStyle: {
    width: 250,
    backgroundColor: colors.secondaryColorAccent,
  },
  buttonTitleStyle: {
    color: colors.black,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    backgroundColor: colors.secondaryColor,
    height: 50,
  },
});
