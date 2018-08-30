import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle.jsx";

import Right from "assets/img/glidespot/right.svg";
import Down from "assets/img/glidespot/down.svg";
import Router from "assets/img/glidespot/router.svg"

import Computer from "assets/img/glidespot/computer.svg";
import Head from "assets/img/glidespot/head-icon.svg";
import Squares from "assets/img/glidespot/squares.svg";
import Wifi from "assets/img/glidespot/wifi.svg";


const Sidebar = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  const { classes, color, logo, image, logoText, routes, userid, subroutes, state } = props;
  console.log("hiiiii "+userid);
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        // var pathbits = prop.path.split("/");
        var path = prop.path;
        if (prop.redirect) return null;
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(path)
        });
        console.log("path "+path);
        return (
          <NavLink
            to={{pathname: path, state: state}}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                <img src={Router} className={classes.imgdown}/>
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText + whiteFontClasses}
                disableTypography={true}
              />
              <ListItemIcon className={whiteFontClasses}>
                {activeRoute(path) ? (<img src={Down} className={classes.imgdown}/>):(<img src={Right} className={classes.imgright}/>)}
              </ListItemIcon>
            </ListItem>
            {activeRoute(path) ? (
            <div>
              {subroutes.map((prop, key) => {
                var subpath = path + prop.path;
                console.log("subpath "+subpath);
                var sublistItemClasses;
                if (prop.path === "/upgrade-to-pro") {
                  activePro = classes.activePro + " ";
                  listItemClasses = classNames({
                    [" " + classes[color]]: true
                  });
                } else {
                  sublistItemClasses = classNames({
                    [" " + classes[color]]: activeRoute(subpath)
                  });
                }
                const subwhiteFontClasses = classNames({
                  [" " + classes.whiteFont]: activeRoute(subpath)
                });
                const img = {"Head": Head, "Device": Computer, "Squares": Squares, "Wifi": Wifi}
                return(
                  <NavLink
                    to={{pathname: subpath, state: state}}
                    className={activePro + classes.item}
                    activeClassName="active"
                    key={key}
                  >
                  <ListItem button className={classes.itemLink + sublistItemClasses}>
                    <ListItemIcon className={classes.itemIconSub + subwhiteFontClasses}>
                      <img src={img[prop.icon]} />
                    </ListItemIcon>
                    <ListItemText
                      primary={prop.sidebarName}
                      className={classes.itemText + subwhiteFontClasses}
                      disableTypography={true}
                    />
                    <ListItemIcon className={subwhiteFontClasses}>
                      {activeRoute(subpath) ? (<img src={Down} className={classes.imgdown}/>):(<img src={Right} className={classes.imgright}/>)}
                    </ListItemIcon>
                  </ListItem>
                  </NavLink>
              );})}
            </div>
            ):null}
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a className={classes.logoLink}>
        <Link to={{pathname:"/f/signindone", state:state}} >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        </Link>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
