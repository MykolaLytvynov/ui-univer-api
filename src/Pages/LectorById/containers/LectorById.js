import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import fetchLector from "../actions/actions";
import {useParams} from "react-router-dom";

const LectorById = () => {
  const degreeToTypes = {
    ASSISTANT: 'Assistant',
    ASSOCIATE_PROFESSOR: 'Associate professor',
    PROFESSOR: 'Professor',
  };

  const {idLector} = useParams();

  const {
    lectorById,
    isFailed,
    isFetching,
    errPromotingMessage,
  } = useSelector(state => state.lectorByIdReducer);

  const [state, setState] = useState({
    isEdit: false,
    changedName: '',
    changedSurname: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    fetchLector.fetchLector(dispatch, idLector);
  }, []);

  const {
    isEdit,
    changedName,
    changedSurname,
  } = state;

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
          {!isEdit && (
            <div>
              <h3 className="text-center">Lector:</h3>

              <ul className="list-group">
                <li className="list-group-item"><b>Name:</b> {lectorById?.name}</li>
                <li className="list-group-item"><b>Surname:</b> {lectorById?.surname}</li>
                <li className="list-group-item"><b>Degree:</b> {degreeToTypes[lectorById?.degree]}
                  <button type="button"
                          className="btn btn-link icon-link"
                          onClick={() => fetchLector.fetchPromoteLector(dispatch, idLector)}
                  >
                    promote
                  </button>
                  {errPromotingMessage && (<text className="text-warning">{errPromotingMessage}</text>)}
                </li>
              </ul>

              <br/>
              <button type="button" className="btn btn-primary"
                      onClick={() => setState(prevState => ({
                        ...prevState,
                        isEdit: true,
                      }))}
              >
                Edit
              </button>
            </div>
          )}

          {isEdit && (
            <div>
              <h3 className="text-center">Editing lector details:</h3>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
              <span className="input-group-text"
                    id="inputGroup-sizing-default">Name: </span>
                </div>
                <input type="text"
                       className="form-control"
                       placeholder={lectorById.name}
                       onChange={({ target }) => setState(prevState => ({
                         ...prevState,
                         changedName: target.value,
                       }))}
                ></input>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
              <span className="input-group-text"
                    id="inputGroup-sizing-default">Surname: </span>
                </div>
                <input type="text"
                       className="form-control"
                       placeholder={lectorById.surname}
                       onChange={({ target }) => setState(prevState => ({
                         ...prevState,
                         changedSurname: target.value,
                       }))}
                ></input>
              </div>

              <button type="button" className="btn btn-primary flex-row"
                      onClick={() => {
                        fetchLector.fetchUpdateLector(
                          dispatch,
                          idLector,
                          changedName ? changedName : lectorById.name,
                          changedSurname ? changedSurname : lectorById.surname,
                        )
                        setState(prevState => ({
                          ...prevState,
                          isEdit: false,
                        }))
                      }}
              >
                Save
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LectorById;
