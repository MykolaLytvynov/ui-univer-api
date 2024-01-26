import {
  REQUEST_LECTORS,
  RECEIVE_LECTORS,
  ERROR_LECTORS,
} from '../constants/actionTypes';

const initialState = {
  lectors: [],
  isFailed: false,
  isFetching: false,
};


export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_LECTORS: {
      return {
        ...state,
        isFailed: false,
        isFetching: true,
      };
    }

    case RECEIVE_LECTORS: {
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        lectors: action.lectors,
      };
    }

    case ERROR_LECTORS: {
      return {
        ...state,
        isFailed: true,
        isFetching: false,
      };
    }

    default:
      return state;
  }
};
