import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import fetchLectors from "../actions/actions";
import {Link} from "react-router-dom";

const Lectors = () => {

  const degreeToTypes = {
    ASSISTANT: 'Assistant',
    ASSOCIATE_PROFESSOR: 'Associate professor',
    PROFESSOR: 'Professor',
  };

  const {
    lectors,
    isFailed,
    isFetching,
  } = useSelector(state => state.lectorsReducer);

  const [state, setState] = useState({
    search: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    fetchLectors.fetchLectors(dispatch);
  }, []);

  const filteredLectors = lectors.filter(lector =>
    (lector.name + " " + lector.surname).toLowerCase()
      .includes(state.search.toLowerCase()));

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
          <h4 class="text-center">Lectors</h4>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"
                    id="inputGroup-sizing-default">Search lector: </span>
            </div>
            <input type="text"
                   className="form-control"
                   onChange={({ target }) => setState(prevState => ({
                     ...prevState,
                     search: target.value,
                   }))}
            ></input>
          </div>

          <div>
            <table className="table table-bordered table-hover ">
              <thead className="table-th">
                <tr>
                  <th style={{width: 300}}>Name</th>
                  <th style={{width: 300}}>Surname</th>
                  <th style={{width: 150}}>Degree</th>
                </tr>
              </thead>
              {filteredLectors.map((lector) => (
                <tbody className="table-body">
                  <tr>
                    <td><Link to={`/lectors/${lector.id}`}>{lector.name}</Link></td>
                    <td><Link to={`/lectors/${lector.id}`}>{lector.surname}</Link></td>
                    <td>{degreeToTypes[lector.degree]}</td>
                  </tr>
                </tbody>
              ))}
              </table>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Lectors;
