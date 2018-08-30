import React from 'react';
import {Link, Redirect} from "react-router-dom";
import PageHeader from 'signupcommon/pageHeader';
import Footer from 'signupcommon/footer';

import Tick from "assets/img/resources/page-1-tick.svg"

import "styles/signupdonepage.css";

class SignUpDone extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
      
        if (this.props.location.state === undefined) {
          return (<Redirect to={{pathname: '/error', state: {email: undefined, name: undefined}}} />);
        } else if (this.props.location.state.signup === undefined) {
          return (<Redirect to={{pathname: '/error', state: {email: undefined, name: undefined}}} />);
        }
    
        console.log("Rendering Sign Up Page Done Container");
        // document.body.style.backgroundColor = "#3e8370";
        return (
            <span className="signupdonepage">
                <PageHeader page="Sign-up"/> 
                <div>
                <div className="container error-msg col-centered" style={{visibility:"hidden"}}>
                    <p>
                      hi
                    </p>
                </div>
                <div className="container col-centered">
                  <div className="row">
                    <img src={Tick} className="page-2" />
                    <div id="sign-up">
                      <h1 style={{fontSize: 30, fontWeight: 900, color: '#6d6e71'}}>Sign-up Done!</h1>
                    </div>
                    <div className="row" id="content" style={{margin: 15, textAlign: 'center', color: '#4d4d4d'}}>
                      <p>Thank you for signing up with GlideX.</p>
                      <p>
                        Verify your GlideX WiFi account by clicking the link in the email sent to <b>{this.props.location.state.email}</b>.
                      </p>
                    </div>
                    <div>
                      <div className="form-group" style={{marginTop: '4.8%'}}>
                        <Link to='/signin'><button className="btn btn-primary" style={{backgroundColor: '#3e8370', width: 320, height: 40}}>Sign-in</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<div id="sign-in">
                  <Link to='/signin'><div className="link">Sign In</div></Link>
                </div>*/}
                </div>
                <Footer/>
            </span>
        )
    }
}

export default SignUpDone;