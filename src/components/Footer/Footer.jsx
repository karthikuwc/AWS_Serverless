import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle";

import dots from "assets/img/glidespot/threedots.svg"

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: "Lato"
  },
});

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={""/*classes.left*/}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Control Center
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={classes.block}>
                Help Center
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portfolio" className={classes.block}>
                Privacy
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={classes.block}>
                <img src={dots} className={classes.img}/>
              </a>
            </ListItem>
          </List>
        </div>
       {/* <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a href="https://www.creative-tim.com" className={classes.a}>
              Creative Tim
            </a>, made with love for a better web
          </span>
        </p> */}
      </div>
    </footer>
    </MuiThemeProvider>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
