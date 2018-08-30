import { successColor } from "assets/jss/material-dashboard-react.jsx";

const dashboardStyle = {
  successText: {
    color: successColor
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: "#999999",
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: "#4d4d4d",
    margin: "22%",
    fontSize: "25px",
    marginTop: "30px",
    marginBottom: "0",
    textAlign:"center",
    width:"56%",
    display:"flex",
    fontFamily:"Lato",
    fontWeight:"bold",
    letterSpacing:"0.4px",
    lineHeight: "30px"
  },
  //
  img: {
    width:"50px",
    height:"50px",
    marginTop:"20px"
  },
  img2: {
    width:"20px",
    height:"20px",
    marginRight:"30px"
  },
  panelBtn: {
    width: "300px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#4dbea4",
    fontFamily: "Lato",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    textTransform:"none",
    marginTop:"5px",
  },
  cardMessage : {
    width: "64%",
    marginLeft:"18%",
    marginTop:"13px",
    fontFamily: "Lato",
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
    color: "#737373",
    letterSpacing:"0.4px"
  },
  //
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

export default dashboardStyle;
