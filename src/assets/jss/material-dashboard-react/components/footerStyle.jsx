import {
  defaultFont,
  container,
  primaryColor
} from "assets/jss/material-dashboard-react.jsx";

const footerStyle = {
  block: { // 
    color: "#737373",
    padding: "15px",
    textTransform: "none",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    fontFamily: "Lato",
    fontWeight: "500",
    fontSize: "18px",
  },
  img : { //
    width:"34px",
    height:"9px",
    verticalAlign: "middle",
    marginRight:"15px"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important"
  },
  footer: { //
    bottom: "0",
    borderTop: "1px solid #e7e7e7",
    padding: "0px 0",
    backgroundColor:"#fff",
    fontFamily: "Lato",
    height:"70px",
    verticalAlign:"middle"
  },
  container,
  a: { //
    textDecoration: "none",
    backgroundColor: "#fff"
  },
  list: { //
    marginBottom: "0",
    padding: "0",
    marginTop: "10px",
    verticalAlign:"middle"
  },
  popover: { //
    backgroundColor: "white",
    position:"relative"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
    fontFamily: "Lato",
  }
};
export default footerStyle;
