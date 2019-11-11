import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleError} from '../../actions/index';
import {getBeerFromId} from '../../actions/beer';

import BeerDetail from './beerDetail';

const mapStateToProps = (state, props) => {
  console.log('beerDetailState', state);
  console.log('beerDetailProps', props);

  return {...state};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleError,
      getBeerFromId,
    },
    dispatch,
  );
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log('beerDetailStateProps', stateProps);
  console.log('beerDetaildispatchProps', dispatchProps);
  console.log('beerDetailownProps', ownProps);

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
)(BeerDetail);
