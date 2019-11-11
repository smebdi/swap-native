import _ from 'lodash';
import moment from 'moment';

const defaultMethod = 'GET';
const defaultHeader = {
  Accept: 'application/xml, application/json',
  'Content-Type': 'application/json',
};

const baseUrl = 'https://swap-node.herokuapp.com/untappd/';

import {
  RESET_SESSION,
  SHOW_LOADING_MODAL,
  HIDE_LOADING_MODAL,
} from '../shared/ActionTypes';

export function callAPI(
  URLIn,
  bodyIn = null,
  methodIn = defaultMethod,
  headersIn = defaultHeader,
) {
  console.log('calling api');
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      let state = getState();
      console.log('calling api promise', state);
      let url = baseUrl + URLIn;

      let fetchBody = bodyIn ? JSON.stringify(bodyIn) : null;
      if (headersIn && headersIn['Content-Type'] === 'multipart/form-data') {
        fetchBody = bodyIn;
      }

      fetch(url, {
        credentials: 'include',
        method: methodIn,
        headers: headersIn,
        body: fetchBody,
      })
        .then(result => {
          if (!result.ok || result.status === 500) {
            reject(result);
          } else {
            dispatch(resetSession());
            resolve(result);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}

function fixUrlSlashes(baseUrl, appendedUrl) {
  let fixedUrl = '';
  if (
    baseUrl.charAt(baseUrl.length - 1) === '/' &&
    appendedUrl.charAt(0) === '/'
  ) {
    fixedUrl = baseUrl + appendedUrl.slice(1, appendedUrl.length);
  } else if (
    baseUrl.charAt(baseUrl.length - 1) !== '/' &&
    appendedUrl.charAt(0) !== '/'
  ) {
    fixedUrl = baseUrl + '/' + appendedUrl;
  } else {
    fixedUrl = baseUrl + appendedUrl;
  }

  return fixedUrl;
}

export function setLoggedInUser(user) {
  return {
    personID: user.personId,
    providerID: user.uabEmployeeId,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    isPhysician: user.physicianIndicator,
  };
}

export function resetSession() {
  return {
    type: RESET_SESSION,
    session: moment(),
  };
}

export function handleError(err, showModal = false, displayMessage) {
  if (showModal) {
    if (displayMessage) {
      alert(displayMessage);
    } else {
      if (_.isObject(err)) {
        alert(JSON.stringify(err, null, 2));
      } else {
        alert(err);
      }
    }
  }
  console.warn(err);
  console.warn(displayMessage);
}

export function showLoadingModal() {
  return {
    type: SHOW_LOADING_MODAL,
  };
}

export function hideLoadingModal() {
  return {
    type: HIDE_LOADING_MODAL,
  };
}
