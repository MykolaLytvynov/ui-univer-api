import React from "react";

import {
  REQUEST_LECTORS,
  RECEIVE_LECTORS,
  ERROR_LECTORS,
} from '../constants/actionTypes';
import {BASE_URL} from "../../../Constants/config";

const requestLectors = () => ({
  type: REQUEST_LECTORS,
});

const receiveLectors = (lectors) => ({
  lectors,
  type: RECEIVE_LECTORS,
});

const errorLectors = () => ({
  type: ERROR_LECTORS,
});


const fetchLectors = (dispatch) => {
  dispatch(requestLectors());

  fetch(`${BASE_URL}/lector`)
    .then(lectors => lectors.json())
    .then(lectors => {dispatch(receiveLectors(
      lectors,
    ))})
    .catch(() => dispatch(errorLectors()));
}

export default {
  fetchLectors,
};
