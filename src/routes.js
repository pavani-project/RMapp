import React from "react";
import { Dashboard } from "./pages/dashboard";
// import { TheLayout } from "../src/pages/thelayout";
import { CustomerAppoitments } from "../src/pages/customer appointments";
import { EmpDetails } from "../src/pages/employee details";

import { JobApp } from "../src/pages/jobapplications";

import { StoreRoom } from "../src/pages/storeroom details";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import DashboardIcon from "@mui/icons-material/Dashboard";

const routes = [
  // { path: "/thelayout", exact: true, name: "The Layout", component: TheLayout },
  {
    path: "/customer-appointments",
    name: "Customer Appoitments",
    component: <CustomerAppoitments />,
    icon: <CalendarTodayIcon />,
    exact: true,
  },
  {
    path: "/empoyee-details",
    name: "Employee Details",
    component: <EmpDetails />,
    icon: <ManageAccountsIcon />,
    exact: true,
  },
  {
    path: "/job-applications",
    name: "Job Applications",
    component: <JobApp />,
    icon: <AccountCircleIcon />,
    exact: true,
  },
  {
    path: "/store-room",
    name: "Store Room",
    component: <StoreRoom />,
    icon: <InventorySharpIcon />,
    exact: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <Dashboard />,
    icon: <DashboardIcon />,
    exact: true,
  },
];
export default routes;
