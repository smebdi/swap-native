import {
  RESET_BEER_DETAIL,
  RESET_BEER_LIST,
  GET_BEER_LIST,
  GET_BEER_BY_ID,
} from '../shared/ActionTypes';

export const initialState = {
  beerList: [],
  beer: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_BEER_DETAIL:
      return {...state, beer: {}};
    case RESET_BEER_LIST:
      return {...state, beerList: []};
    case GET_BEER_LIST:
      return {...state, beerList: action.beerList};
    case GET_BEER_BY_ID:
      return {...state, beer: action.beer};
    default:
      return state;
  }
};
