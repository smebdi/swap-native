import {takeEvery, call, put, select} from 'redux-saga/effects';
import {delay} from 'redux-saga';

import {GET_BEER_LIST, GET_BEER_BY_ID} from '../actions/beer';

export const getLatestResult = function*({beer}) {
  yield call(requestTimeout(true), beer);
};

const requestTimeout = (time, promise) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Request timed out.')), time);
    promise.then(resolve, reject);
  });

const rootSaga = function*() {
  yield takeEvery(GET_BEER_LIST, getLatestResult);
  yield takeEvery(GET_BEER_BY_ID, getLatestResult);
};

export default rootSaga;
