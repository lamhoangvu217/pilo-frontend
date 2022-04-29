import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import LandingPage from "components/pages/LandingPage";
import Register from "components/pages/Register";
import Login from "components/pages/Login";
import Dashboard from "components/pages/Dashboard";
import ProjectPage from "components/pages/ProjectPage";
import Pricing from "components/pages/Pricing";
import Introduce from "components/pages/Introduce";
function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
