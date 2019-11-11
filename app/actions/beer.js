import {callAPI, handleError} from './index';
import {
  RESET_BEER_LIST,
  RESET_BEER_DETAIL,
  GET_BEER_LIST,
  GET_BEER_BY_ID,
} from '../shared/ActionTypes';

// function filterBeerSearchResults(beerList) {
//   beerList = beerList.response.beers.items;
//   return beerList;
// }

// function filterBeerByIdResults(beer) {
//   beer = beer.response.beer;
//   return beer;
// }

export function clearBeerList() {
  return (dispatch, getState) => {
    return dispatch({
      type: RESET_BEER_LIST,
    });
  };
}

export function clearBeerDetail() {
  return (dispatch, getState) => {
    return dispatch({
      type: RESET_BEER_DETAIL,
    });
  };
}

export function setBeerFromSearch(beer) {
  return (dispatch, getState) => {
    return dispatch({
      type: GET_BEER_BY_ID,
      beer: beer,
    });
  };
}

export function getBeerListFromQuery(query) {
  return (dispatch, getState) => {
    return new Promise(function(resolve, reject) {
      const url = `beerSearch/q/${query}`;
      return dispatch(callAPI(url, null, 'GET'))
        .then(response => response.json())
        .then(jsonData => {
          dispatch({
            type: GET_BEER_LIST,
            beerList: jsonData.response.beers.items,
          });
          resolve(true);
        })
        .catch(error => {
          handleError(error);
          reject('An error occurred retrieving beers from the fridge.');
        });
    });
  };
}

export function getBeerFromId(id) {
  return (dispatch, getState) => {
    return new Promise(function(resolve, reject) {
      const url = `beerInfo/BID/${id}`;
      return dispatch(callAPI(url, null, 'GET'))
        .then(response => response.json())
        .then(jsonData => {
          dispatch({
            type: GET_BEER_BY_ID,
            beerList: jsonData.response.beer,
          });
          resolve(true);
        })
        .catch(error => {
          handleError(error);
          reject('An error occurred retrieving beers from the fridge.');
        });
    });
  };
}
