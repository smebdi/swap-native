import config from '../config/config';
import {SHOW_LOADING_MODAL, HIDE_LOADING_MODAL} from '../shared/ActionTypes';

export default function appConfig(state = config, action) {
  switch (action.type) {
    case SHOW_LOADING_MODAL:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADING_MODAL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
