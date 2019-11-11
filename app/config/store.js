import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

import reducer from '../reducers';
// import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['network'],
};
const persistReducer = persistCombineReducers(persistConfig, reducer);

const configureStore = () => {
  const store = createStore(persistReducer, applyMiddleware(...middleware));
  // sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return {store, persistor};
};

export default configureStore;
