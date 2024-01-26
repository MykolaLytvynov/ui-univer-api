import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import fetchDepartment from "../actions/actions";
import {useParams} from "react-router-dom";

const DepartmentById = () => {

  const {idDepartment} = useParams();

  const {
    statistic,
    isFailed,
    isFetching,
  } = useSelector(state => state.departmentByIdReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchDepartment.fetchDepartmentStatistic(dispatch, idDepartment);
  }, []);

  return (
    <div>
      {isFetching ? (
        <div className="text-primary">
        <div role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      ) : (isFailed ? (
        <div className="text-bg-danger">
          <div role="status">
            <span className="sr-only">Loading failed...</span>
          </div>
        </div>
      ) : (
        <div className="container">
        <h3 className="text-center">Department: {statistic?.departmentName}</h3>

        <ul className="list-group">
          <li className="list-group-item">
            <b>Assistant:</b> {statistic.degreeToCount?.ASSISTANT} lectors</li>
          <li className="list-group-item">
            <b>Associate professor:</b> {statistic.degreeToCount?.ASSOCIATE_PROFESSOR} lectors</li>
          <li className="list-group-item">
            <b>Professor:</b> {statistic.degreeToCount?.PROFESSOR} lectors</li>
        </ul>
      </div>
      ))}
    </div>
  );
}

export default DepartmentById;
