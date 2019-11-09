import React, {Component} from 'react';
import {View, Text, Platform, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import {Container} from '../components/Container';
import {SubHeader} from '../components/SubHeader';
import {List, ListItem, SearchBar} from 'react-native-elements';
import colors from '../config/colors';
import uuid from 'react-native-uuid';
import {debounce} from 'lodash';

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

function apiCall(search) {
  fetch(`https://swap-node.herokuapp.com/untappd/beerSearch/${search}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
      return json;
    })
    .catch(error => {
      console.error(error);
    });
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.updateSearchDelayed = debounce(this.updateSearch, 250);
  }

  state = {
    search: '',
    data: list,
  };

  updateSearch = (search) => {
    console.log(search);
    this.setState({search});
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{source: {uri: item.avatar_url}}}
      bottomDivider
      chevron
      isVisible={true}
    />
  );

  renderHeader = search => {
    return (
      <Container>
        <SearchBar
          ref={searchbar => (this.search = searchbar)}
          value={search}
          placeholder="Find beer or breweries"
          onChangeText={this.updateSearchDelayed}
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          inputContainerStyle={{backgroundColor: colors.backgroundColor}}
        />
      </Container>
    );
  };

  render() {
    const {data, search} = this.state;
    return data ? (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader(search)}
        onEndReachedThreshold={0.5}
      />
    ) : (
      <TouchableOpacity onPress={console.log('search')}>
        Search
      </TouchableOpacity>
    );
  }
}

const ConnectedSearch = connect(null)(Search);

export default props => (
  <AlertConsumer>
    {context => (
      <ConnectedSearch alertWithType={context.alertWithType} {...props} />
    )}
  </AlertConsumer>
);
