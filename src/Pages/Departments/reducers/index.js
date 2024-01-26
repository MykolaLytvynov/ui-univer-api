import {
  REQUEST_DEPARTMENTS,
  RECEIVE_DEPARTMENTS,
  ERROR_DEPARTMENTS,
} from '../constants/actionTypes';

const initialState = {
  departments: [],
  isFailed: false,
  isFetching: false,
};


export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_DEPARTMENTS: {
      return {
        ...state,
        isFailed: false,
        isFetching: true,
      };
    }

    case RECEIVE_DEPARTMENTS: {
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        departments: action.departments,
      };
    }

    case ERROR_DEPARTMENTS: {
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
