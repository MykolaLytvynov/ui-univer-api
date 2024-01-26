import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import LectorById from "./Pages/LectorById/containers/LectorById";
import DepartmentById from "./Pages/DepartmentById/containers/DepartmentById";
import Departments from "./Pages/Departments/containers/Departments";
import Lectors from "./Pages/Lectors/containers/Lectors";

function App() {
  return (
    <div>
      <Header/>

      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/lectors/:idLector" element={<LectorById/>} />
          <Route path="/departments/:idDepartment" element={<DepartmentById/>} />
          <Route path="/departments" element={<Departments/>} />
          <Route path="/lectors" element={<Lectors/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
