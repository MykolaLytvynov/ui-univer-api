import {
  REQUEST_DEPARTMENT_BY_ID,
  RECEIVE_DEPARTMENT_BY_ID,
  ERROR_DEPARTMENT_BY_ID,
} from '../constants/actionTypes';

const initialState = {
  statistic: {},
  isFailed: false,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_DEPARTMENT_BY_ID: {
      return {
        ...state,
        isFailed: false,
        isFetching: true,
      };
    }

    case RECEIVE_DEPARTMENT_BY_ID: {
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        statistic: action.statistic,
      };
    }

    case ERROR_DEPARTMENT_BY_ID: {
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
