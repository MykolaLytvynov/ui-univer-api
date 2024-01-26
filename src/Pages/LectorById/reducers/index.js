import {
  REQUEST_LECTOR_BY_ID,
  RECEIVE_LECTOR_BY_ID,
  ERROR_LECTOR_BY_ID,
  REQUEST_PROMOTE_LECTOR_BY_ID,
  RECEIVE_PROMOTE_LECTOR_BY_ID,
  ERROR_PROMOTE_LECTOR_BY_ID,
  REQUEST_UPDATE_LECTOR_BY_ID,
  RECEIVE_UPDATE_LECTOR_BY_ID, ERROR_UPDATE_LECTOR_BY_ID,
} from '../constants/actionTypes';

const initialState = {
  lectorById: {},
  isFailed: false,
  isFetching: false,
  isPromoteFailed: false,
  isPromoteFetching: false,
  errPromotingMessage: '',
  isUpdateFailed: false,
  isUpdateFetching: false,
};

export default (state = initialState, action) => {

  switch (action.type) {

    case REQUEST_LECTOR_BY_ID: {
      return {
        ...state,
        isFailed: false,
        isFetching: true,
        errPromotingMessage: '',
      };
    }

    case RECEIVE_LECTOR_BY_ID: {
      return {
        ...state,
        isFailed: false,
        isFetching: false,
        lectorById: action.lector,
      };
    }

    case ERROR_LECTOR_BY_ID: {
      return {
        ...state,
        isFailed: true,
        isFetching: false,
      };
    }

    case REQUEST_PROMOTE_LECTOR_BY_ID: {
      return {
        ...state,
        isPromoteFailed: false,
        isPromoteFetching: true,
        errPromotingMessage: '',
      }
    }

    case RECEIVE_PROMOTE_LECTOR_BY_ID: {
      return {
        ...state,
        isPromoteFailed: false,
        isPromoteFetching: false,
        lectorById: action.lector,
      }
    }

    case ERROR_PROMOTE_LECTOR_BY_ID: {
      return {
        ...state,
        isPromoteFailed: true,
        isPromoteFetching: false,
        errPromotingMessage: action.err,
      }
    }

    case REQUEST_UPDATE_LECTOR_BY_ID: {
      return {
        ...state,
        isUpdateFailed: false,
        isUpdateFetching: true,
        errPromotingMessage: '',
      }
    }

    case RECEIVE_UPDATE_LECTOR_BY_ID: {
      return {
        ...state,
        isUpdateFailed: false,
        isUpdateFetching: false,
        lectorById: action.lector,
      }
    }

    case ERROR_UPDATE_LECTOR_BY_ID: {
      return {
        ...state,
        isUpdateFailed: true,
        isUpdateFetching: false,
      }
    }

    default:
      return state;
  }
};
