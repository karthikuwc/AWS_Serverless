// import Dashboard from "layouts/Dashboard/Dashboard.jsx";
// import SignIn from "signuppages/signIn";
// import Home from "signuppages/home";
// import SignInDone from "signuppages/signInDone";
// import SignUp from "signuppages/signUp";
// import SignUpDone from "signuppages/signUpDone"


const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ 'layouts/Dashboard/Dashboard.jsx');
const SignIn = () => import(/* webpackChunkName: "SignIn" */ 'signuppages/signIn');
const Home = () => import(/* webpackChunkName: "Home" */ 'signuppages/home');
const SignInDone = () => import(/* webpackChunkName: "SignInDone" */ 'signuppages/signInDone');
const SignUp = () => import(/* webpackChunkName: "SignUp" */ 'signuppages/signUp');
const SignUpDone = () => import(/* webpackChunkName: "SignUpDone" */ 'signuppages/signUpDone');

const indexRoutes = [
        { path: "/", component: Home, exact: true}, 
        { path: "/signin", component: SignIn },
        { path: "/signup", component: SignUp },
        { path: "/signupdone", component: SignUpDone},
        { path: "/d", component: Dashboard},
        { path: "/f/signindone", component:SignInDone}
    ];

export default indexRoutes;
