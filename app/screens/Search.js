import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import BeerList from '../components/beerList/beerListContainer';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BeerList props={this.props} />;
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
