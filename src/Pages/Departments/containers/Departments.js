import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import fetchDepartments from "../actions/actions";
import {Link} from "react-router-dom";

const Departments = () => {
  const degreeToTypes = {
    ASSISTANT: 'Assistant',
    ASSOCIATE_PROFESSOR: 'Associate professor',
    PROFESSOR: 'Professor',
  };

  const {
    departments,
    isFailed,
    isFetching,
  } = useSelector(state => state.departmentsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchDepartments.fetchDepartments(dispatch);
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

        <div className="container overflow-hidden">
          <h4 className="text-center">Departments</h4>

          {departments.map((department) => (
            <div>
              <Link to={`/departments/${department.id}`}><h5>{department.name}</h5></Link>

              <table class="table table-bordered table-hover ">
                <thead className="table-th">
                <tr>
                  <th style={{width: 300}}>Name</th>
                  <th style={{width: 150}}>Degree</th>
                </tr>
                </thead>
              {department?.lectors.map((lector) => (
                  <tbody className="table-body">
                  <tr>
                    <td>{lector.name + ' ' + lector.surname}</td>
                    <td>{degreeToTypes[lector.degree]}</td>
                  </tr>
                  </tbody>
              ))}
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Departments;
