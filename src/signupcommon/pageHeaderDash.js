import React from 'react';
import {Link} from "react-router-dom";
import Logo from "assets/img/resources/page-1.svg";
import Cross from "assets/img/resources/cross.svg";
import "styles/signuppage.css";


class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

    }
    
    render() {
    
        console.log("Rendering Page Header");
        
        return (
            // <nav className="navbar navbar-default navbar-static-top">
            //     <div className="container-fluid">
            //       <div id="navbar" className="collapse navbar-collapse" style={{borderTopWidth: 0}}>
            //         <ul className="nav navbar-nav">
            //           <li><a href="#">GlideX</a></li>
            //           <li><img src="../resources/cross.svg" className="cross"/></li>
            //         </ul>
            //         {/*<ul className="nav navbar-nav navbar-right">
            //           <li><a href="#"><i className="glyphicon glyphicon-remove" /></a></li>
            //         </ul>*/}
            //       </div>
            //     </div>
            // </nav>
            <div className="signuppage">
            <nav className="navbar navbar-default navbar-static-top" >
              <div className="navbar-header">
                   
              </div>
              <a className="navbar-brand nav navbar-nav" href="#" id="navbar">GlideSpot {this.props.page}</a>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/d/:userid/dashboard"><img src={Cross} className="cross"/></Link></li>
                </ul>
              </div>
            </nav>
            <img src={Logo} className="plane"/>
            </div>
        )
    }
}

export default PageHeader;