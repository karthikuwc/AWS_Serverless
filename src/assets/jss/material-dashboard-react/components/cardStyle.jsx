const cardStyle = {
  card: {
    // border: "0",
    // marginBottom: "30px",
    // marginTop: "30px",
    // borderRadius: "6px",
    // color: "rgba(0, 0, 0, 0.87)",
    // background: "#fff",
    // width: "100%",
    // boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    // position: "relative",
    // display: "flex",
    // flexDirection: "column",
    // minWidth: "0",
    // wordWrap: "break-word",
    // fontSize: ".875rem"
    border: "solid 2px #4dbea4",
    marginTop: "calc(150px)",
    marginLeft:"27.5%",
    borderRadius: "8px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "rgba(219, 242, 237, 0.95)",
    width: "45%",
    height: "300px",
    position: "relative",
    display: "block",
    textAlign:"center",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};

export default cardStyle;
