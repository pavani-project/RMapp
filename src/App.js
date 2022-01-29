import "./App.css";
import { Login, ForgotPW, SignUp } from "./screens/index";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { JobApp } from "./pages/jobapplications";

import { TheLayout } from "./pages/thelayout";
import { Dashboard } from "./pages/dashboard";
import { CustomerAppoitments } from "./pages/customer appointments";
import { EmpDetails } from "./pages/employee details";
import { StoreRoom } from "./pages/storeroom details";
import { Services } from "./pages/services";

import { NopathErr } from "./error pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpw" element={<ForgotPW />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NopathErr />} />

        <Route path="thelayout" element={<TheLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobapplications" element={<JobApp />} />
          <Route
            path="customer-appointments"
            element={<CustomerAppoitments />}
          />
          <Route path="emp-details" element={<EmpDetails />} />
          <Route path="storeroom-details" element={<StoreRoom />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
