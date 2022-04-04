import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import LandingPage from "components/pages/LandingPage";
import Register from "components/pages/Register";
import Login from "components/pages/Login";
import Dashboard from "components/pages/Dashboard";
import ProjectPage from "components/pages/ProjectPage";
function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
