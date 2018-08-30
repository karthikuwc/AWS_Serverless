import React from 'react';
import "styles/loadingpage.css";


class LoadingIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

    }
    
    render() {
      
        document.body.style.backgroundColor = "#3e8370";
    
        console.log("Rendering Loading Indicator");
        
        return (
            <div className="loadingpage">
            {/*<link rel="stylesheet" href="../styles/loader.css" />*/}
            {<div className="loader col-centered">Loading...</div>}
            </div>
        )
    }
}

function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div><LoadingIndicator/></div>;
  } else {
    return null;
  }
}

export  {LoadingIndicator, Loading};
    
    