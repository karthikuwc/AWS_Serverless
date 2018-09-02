/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

//creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
//withStyles is a method of styling components using JSX.
import withStyles from "@material-ui/core/styles/withStyles";

//core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

//Cognito functions to get user attributes and ensure session is valid
import {checkValid, getAttribute} from "signupcommon/entry";

//Routes available within dashboard
import dashboardRoutes from "routes/dashboard.jsx";
import subListRoutes from "routes/sublist.jsx";

//Style for component to be passed to withStyle function
import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

//Images for component
import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/glidespot/user.svg"; //

//Function to generate a route component for every button in dashboard sidebar.
function routeGenerate(dash, sub, comp) {
  const allroutes = [];
  dash.map((prop, key) => {
    if (prop.redirect) {
      allroutes.push(<Redirect from={prop.path} to={{pathname: prop.to, state: comp.props.location.state}} key={key} />);
    }
    else {
      const Component = prop.component;
      console.log("Router: "+prop.path);
      allroutes.push (<Route path={prop.path} render={(props)=><Component {...props}/>} key={key} />);
      
      sub.map((propc, keyc) => {
        const Component = propc.component;
        console.log("Router: "+prop.path+propc.path);
        allroutes.push (<Route path={prop.path+propc.path} render={(props)=><Component {...props}/>} key={key} />);
      })
    }
  })
  return allroutes;
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      email: "",
      name:""
    };
    this.resizeFunction = this.resizeFunction.bind(this);
    this.attributeCall = this.attributeCall.bind(this);
  }
  
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  
  // getRoute() {
  //   return this.props.location.pathname !== "/d/maps";//
  // }
  
  //This type of function will be useful when configuring mobile view
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  
  //Callback from getAttribute to set user values in component state
  attributeCall(obj) {
    console.log(obj);
    
    this.setState({name: obj.Name, email: obj.Email})
  }
  
  render() {
    
    const switchRoutes = (
      <Switch>
        {routeGenerate(dashboardRoutes, subListRoutes, this)}
      </Switch>
    );
    
    //Cognito userpool details
    var obj = {
      UserPoolId: "ap-southeast-1_TB9GVW9nj",
      ClientId: "2a57aiojrldeloo774oritg30i",
    };
    
    //Set html body background to be different from main css.
    document.body.style.backgroundColor = "#fff"
    
    console.log("State");
    console.log(this.state);
    
    //classes passed to component as props by withStyle function
    const { classes, ...rest } = this.props;
    
    //Check if session is valid
    var valid = checkValid(obj);
    
    console.log("valid: "+valid);
    
    //Get current users attributes
    if (this.state.name === "" || this.state.email === "") getAttribute(obj, this.attributeCall, this);
    
    //If session not valid show error page
    if (!checkValid(obj)) {
      return (<Redirect to={{pathname: '/error', state: {email: undefined, name: undefined}}} />);
    } 

    return (
      <div className={classes.wrapper}>
        <Sidebar
          /*Props needed to render Sidebar*/
          routes={dashboardRoutes}
          subroutes={subListRoutes}
          logoText={ this.state.name} 
          logo={logo}
          image={""}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="greeen" 
          state={this.state}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            /*Props needed to render Header*/
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            email={this.state.email}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {/*this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )*/}
          {/*this.getRoute() ? <Footer /> : null*/}
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

//To ensure style is passed before component rendered
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
