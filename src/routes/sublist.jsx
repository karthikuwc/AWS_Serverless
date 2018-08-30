import React from "react";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import DashboardLayout from "views/Dashboard2/Dashboard.jsx";


const nothing = (<div></div>);

const sublistRoutes = [
  // {
  //   path: "/d/:userid/dashboard",
  //   sidebarName: "Dashboard",
  //   navbarName: "",
  //   icon: Dashboard,
  //   component: DashboardPage,
  // },
  {
    path: "users",
    sidebarName: "Managed Users",
    navbarName: "",
    icon: "Head",
    component: DashboardLayout
  },
  {
    path: "devices",
    sidebarName: "Managed Devices",
    navbarName: "",
    icon: "Device",
    component: DashboardPage
  },
  {
    path: "apps",
    sidebarName: "Installed Apps",
    navbarName: "",
    icon: "Squares",
    component: DashboardLayout
  },
  {
    path: "hubs",
    sidebarName: "Add-on Hubs",
    navbarName: "",
    icon: "Wifi",
    component: DashboardLayout
  },

];

export default sublistRoutes;
