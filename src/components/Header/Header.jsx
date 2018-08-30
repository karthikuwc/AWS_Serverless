import React from "react";
import {Redirect, Link} from "react-router-dom"
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import HeaderLinks from "./HeaderLinks";
import Button from "components/CustomButtons/Button";

import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

import logo from "assets/img/glidespot/airplane.svg";
import black from "assets/img/glidespot/blackboxes.png";
import out from "assets/img/glidespot/signout.svg";

import {signOut} from 'signupcommon/entry';


function Header({ ...props }) {
  function makeBrand() {
    var name;
    props.routes.map((prop, key) => {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  const { classes, color, userid, email } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  var redirect=false;
  function signOutNav() {
    var obj = {
            UserPoolId: "ap-southeast-1_TB9GVW9nj",
            ClientId: "2a57aiojrldeloo774oritg30i",
            Email: email
        }
        console.log("signout "+email);
        signOut(obj);
        
        // return (<Redirect to='/' />);
  }
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <img src={logo} className={classes.img}/>
        <div className={classes.flex + " " + classes.title}>
          {/* Here we create navbar brand, based on route name */}
          {/*<Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>*/}
          Control Center
        </div>
        <img src={black} className={classes.img2}/>
        <Link to={{pathname: '/', state: {email: undefined, name: undefined}}} onClick={signOutNav} ><img src={out} className={classes.img3}/></Link>
       {/* <Hidden smDown implementation="css">
          <HeaderLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>*/}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
