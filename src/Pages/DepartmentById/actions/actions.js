import React from "react";

import {
  REQUEST_DEPARTMENT_BY_ID,
  RECEIVE_DEPARTMENT_BY_ID,
  ERROR_DEPARTMENT_BY_ID,
} from '../constants/actionTypes';
import {BASE_URL} from "../../../Constants/config";

const requestDepartmentById = () => ({
  type: REQUEST_DEPARTMENT_BY_ID,
});

const receiveDepartmentById = (statistic) => ({
  statistic,
  type: RECEIVE_DEPARTMENT_BY_ID,
});

const errorDepartmentById = () => ({
  type: ERROR_DEPARTMENT_BY_ID,
});

const fetchDepartmentStatistic = (dispatch, idDepartment) => {
  dispatch(requestDepartmentById());
  fetch(`${BASE_URL}/department/${idDepartment}/statistics`)
    .then(statistic => statistic.json())
    .then(statistic => {dispatch(receiveDepartmentById(
      statistic,
    ))})
    .catch(() => dispatch(errorDepartmentById()));
};

export default {
  fetchDepartmentStatistic,
};

