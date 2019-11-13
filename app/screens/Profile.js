import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AlertConsumer} from '../components/Alert';
import ProfileScreen from '../components/Profile';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProfileScreen props={this.props} />;
  }
}

const ConnectedProfile = connect(null)(Profile);

export default props => (
  <AlertConsumer>
    {context => (
      <ConnectedProfile alertWithType={context.alertWithType} {...props} />
    )}
  </AlertConsumer>
);
