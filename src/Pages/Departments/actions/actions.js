import React from "react";

import {
  REQUEST_DEPARTMENTS,
  RECEIVE_DEPARTMENTS,
  ERROR_DEPARTMENTS,
} from '../constants/actionTypes';
import {BASE_URL} from "../../../Constants/config";

const requestDepartments = () => ({
  type: REQUEST_DEPARTMENTS,
});

const receiveDepartments = (departments) => ({
  departments,
  type: RECEIVE_DEPARTMENTS,
});

const errorDepartments = () => ({
  type: ERROR_DEPARTMENTS,
});


const fetchDepartments = (dispatch) => {
  dispatch(requestDepartments());

    fetch(`${BASE_URL}/department`)
    .then(departments => departments.json())
    .then(departments => {dispatch(receiveDepartments(
      departments,
    ))})
    .catch(() => dispatch(errorDepartments()));
}

export default {
  fetchDepartments,
};
