import React from "react";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import DashboardLayout from "views/Dashboard2/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const nothing = (<div>Hi</div>);

const dashboardRoutes = [
  // {
  //   path: "/d/:userid/dashboard",
  //   sidebarName: "Dashboard",
  //   navbarName: "Material Dashboard",
  //   icon: Dashboard,
  //   component: DashboardPage,
  // },
  {
    path: "/d/router1",
    sidebarName: "L-Router1",
    navbarName: "Profile",
    icon: Person,
    component: DashboardPage
  },
  {
    path: "/d/router2",
    sidebarName: "L-Router2",
    navbarName: "Table List",
    icon: "content_paste",
    component: DashboardLayout
  },
  {
    path: "/d/router3",
    sidebarName: "L-Router3",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: DashboardPage
  },
  {
    path: "/d/router4",
    sidebarName: "L-Router4",
    navbarName: "Icons",
    icon: BubbleChart,
    component: DashboardPage
  },
  // {
  //   path: "/d/:userid/maps",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: DashboardPage
  // },
  // {
  //   path: "/d/:userid/notifications",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: DashboardPage
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   sidebarName: "Upgrade To PRO",
  //   navbarName: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro
  // },
  { redirect: true, path: "/d", to: "/d/router1", navbarName: "Redirect" } //
];

export default dashboardRoutes;
