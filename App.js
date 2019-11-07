import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import Navigator from './app/config/routes';
import {AlertProvider} from './app/components/Alert';
import configureStore from './app/config/store';

export default class extends React.Component {
  constructor(props) {
    super(props);

    const {store, persistor} = configureStore();
    this.state = {
      store,
      persistor,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={this.state.persistor}>
          <AlertProvider>
            <Navigator onNavigationStateChange={null} />
          </AlertProvider>
        </PersistGate>
      </Provider>
    );
  }
}
