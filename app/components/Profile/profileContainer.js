import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleError} from '../../actions/index';

import Profile from './profile';

const mapStateToProps = (state, props) => {
  console.log('profileState', state);
  console.log('profileProps', props);

  return {...state};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleError,
    },
    dispatch,
  );
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log('profileStateProps', stateProps);
  console.log('profiledispatchProps', dispatchProps);
  console.log('profileownProps', ownProps);

  ownProps = ownProps.props;
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Profile);
