import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "@reduxjs/toolkit";
import lectorByIdReducer from './Pages/LectorById/reducers/index.js';
import departmentByIdReducer from './Pages/DepartmentById/reducers/index.js';
import departmentsReducer from './Pages/Departments/reducers/index.js';
import lectorsReducer from './Pages/Lectors/reducers/index.js';

const store = createStore(combineReducers({
  lectorByIdReducer: lectorByIdReducer,
  departmentByIdReducer: departmentByIdReducer,
  departmentsReducer: departmentsReducer,
  lectorsReducer: lectorsReducer,
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
