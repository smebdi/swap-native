import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleError} from '../../actions/index';

import Auth from './auth';

const mapStateToProps = (state, props) => {
  console.log('authState', state);
  console.log('authProps', props);

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
  console.log('authStateProps', stateProps);
  console.log('authdispatchProps', dispatchProps);
  console.log('authownProps', ownProps);

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
)(Auth);
