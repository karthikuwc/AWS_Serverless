/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import {checkValid} from "signupcommon/entry";

import dashboardRoutes from "routes/dashboard.jsx";
import subListRoutes from "routes/sublist.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/glidespot/user.svg"; //


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
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/d/maps";//
  }
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
  render() {
    
    const switchRoutes = (
      <Switch>
        {/*dashboardRoutes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
          const Component = prop.component;
          console.log("Router: "+prop.path);
          return (
          <Route path={prop.path} render={(props)=><Component {...props}/>} key={key} />)//
        })*/ routeGenerate(dashboardRoutes, subListRoutes, this)}}
      </Switch>
    );
    
    var obj = {
      UserPoolId: "ap-southeast-1_TB9GVW9nj",
      ClientId: "2a57aiojrldeloo774oritg30i",
    };
    
    document.body.style.backgroundColor = "#fff"
    
    console.log("State");
    console.log(this.props.location.state);
    
    const { classes, ...rest } = this.props;
    
    var valid = checkValid(obj);
    
    console.log("valid: "+valid);
    
    if (this.props.location.state === undefined || !checkValid(obj)) {
      return (<Redirect to={{pathname: '/error', state: {email: undefined, name: undefined}}} />);
    } else if (this.props.location.state.name === undefined) {
      return (<Redirect to={{pathname: '/error', state: {email: undefined, name: undefined}}} />);
    }

    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          subroutes={subListRoutes}
          logoText={ this.props.location.state.name} //
          logo={logo}
          image={""}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="greeen" //
          userid={this.props.match.params.userid}
          state={this.props.location.state}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            userid={this.props.match.params.userid}
            email={this.props.location.state.email}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
