import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleError} from '../../actions/index';
import {
  clearBeerDetail,
  clearBeerList,
  getBeerListFromQuery,
  setBeerFromSearch,
} from '../../actions/beer';

import BeerList from './beerList';

const mapStateToProps = (state, props) => {
  return {...state};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleError,
      getBeerListFromQuery,
      setBeerFromSearch,
      clearBeerList,
      clearBeerDetail,
    },
    dispatch,
  );
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
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
)(BeerList);
