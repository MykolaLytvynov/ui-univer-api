import React from "react";

import {
  REQUEST_LECTOR_BY_ID,
  RECEIVE_LECTOR_BY_ID,
  ERROR_LECTOR_BY_ID,
  REQUEST_PROMOTE_LECTOR_BY_ID,
  RECEIVE_PROMOTE_LECTOR_BY_ID,
  ERROR_PROMOTE_LECTOR_BY_ID,
  REQUEST_UPDATE_LECTOR_BY_ID,
  RECEIVE_UPDATE_LECTOR_BY_ID,
  ERROR_UPDATE_LECTOR_BY_ID,
} from '../constants/actionTypes';
import {BASE_URL} from "../../../Constants/config";

const requestLectorById = () => ({
  type: REQUEST_LECTOR_BY_ID,
});

const receiveLectorById = (lector) => ({
  lector,
  type: RECEIVE_LECTOR_BY_ID,
});

const errorLectorById = () => ({
  type: ERROR_LECTOR_BY_ID,
});

const requestPromoteLectorById = () => ({
  type: REQUEST_PROMOTE_LECTOR_BY_ID,
});

const receivePromoteLectorById = (lector) => ({
  lector,
  type: RECEIVE_PROMOTE_LECTOR_BY_ID,
});

const errorPromoteLectorById = (err) => ({
  err,
  type: ERROR_PROMOTE_LECTOR_BY_ID,
});

const requestUpdateLectorById = () => ({
  type: REQUEST_UPDATE_LECTOR_BY_ID,
});

const receiveUpdateLectorById = (lector) => ({
  lector,
  type: RECEIVE_UPDATE_LECTOR_BY_ID,
});

const errorUpdateLectorById = () => ({
  type: ERROR_UPDATE_LECTOR_BY_ID,
});


const fetchLector = (dispatch, idLector) => {
  dispatch(requestLectorById());
  fetch(`${BASE_URL}/lector/${idLector}`)
    .then(lector => lector.json())
    .then(lector => {dispatch(receiveLectorById(
        lector,
      ))})
    .catch(() => dispatch(errorLectorById()));
};

const fetchPromoteLector = (dispatch, idLector) => {
  dispatch(requestPromoteLectorById());
  fetch(`${BASE_URL}/lector/${idLector}/promote`, {
    method: 'PUT',
  })
    .then(response => {
      if (response.status == 400) {
        dispatch(errorPromoteLectorById(
          "It is impossible to promote. Lector is a professor",
        ));
      } else {
        response.json().then(lector => {
          dispatch(receivePromoteLectorById(
            lector,
          ))})}
    })
    .catch(() => dispatch(errorPromoteLectorById("Something is wrong, try it again")));
};

const fetchUpdateLector = (dispatch, idLector, changedName, changedSurname) => {

  dispatch(requestUpdateLectorById());
  fetch(`${BASE_URL}/lector/update`, {
    method: "POST",
    headers: {
      'Content-Type': "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      id: idLector,
      changedName: changedName,
      changedSurname: changedSurname,
    }),
  })
    .then(lector => lector.json())
    .then(lector => {dispatch(receiveUpdateLectorById(
      lector,
    ))})
    .catch(() => dispatch(errorUpdateLectorById()));
};

export default {
  fetchLector,
  fetchPromoteLector,
  fetchUpdateLector,
};

