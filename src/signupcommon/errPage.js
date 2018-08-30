import React from 'react';
import {Link} from 'react-router-dom'
import Footer from 'signupcommon/footer';
import "styles/signuppage.css";

import GlideSpotLogo from "assets/img/resources/glide-spot-logo-coloured.svg";

class Errpage extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
    
        console.log("Rendering Error Page");
        
        document.body.style.backgroundColor = "#3e8370";

        return (
            <span className="signuppage">
            <div>
                <div className="container" style={{textAlign: 'center', margin: '0 auto', paddingTop: 50, paddingBottom: 30}}>
                  <img src={GlideSpotLogo} />
                </div>
                <div className="container error-page">
                  <h3>Error (404)</h3>
                  <p>The page you are looking for is either<br /> restricted or doesn't exist. Check out our <br />Help Center, or Home.</p>
                </div>
                <div id="sign-in">
                  <div className="link"><Link to='/'>Home</Link></div>
                </div>
                <Footer/>
              </div>
            </span>
        
        )
    }
}

export default Errpage;