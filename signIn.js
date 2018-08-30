import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Link} from "react-router-dom";
import {Tooltip, Overlay} from 'react-bootstrap';

import {signIn} from 'signupcommon/entry';
import PageHeader from 'signupcommon/pageHeader';
import Footer from 'signupcommon/footer';
import errors from 'signupcommon/error';

import Envelope from "assets/img/resources/page-1-envelope.svg";
import Key from "assets/img/resources/key-icon.svg";
import Mobile from "assets/img/resources/page-1-mobile.svg";


import "styles/signuppage.css";


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            mobileNumber: "",
            password: "",
            name:"",
            redirect: false,
            email: {
              button:"active",
              form: {display: 'block'}
            },
            mobile:{
              button:"",
              form: {display: 'none'}
            },
            on:true,
            err: {
              mes:"",
              email:false,
              password: false
            },
            vis:"hidden"
        };
        
        
        this.emailChange = this.emailChange.bind(this);
        this.mobileChange = this.mobileChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signInCallback = this.signInCallback.bind(this);
        this.onFormChoiceClick = this.onFormChoiceClick.bind(this);
        this.hide = this.hide.bind(this);
        this.getTarget = this.getTarget.bind(this);
    }
    
    emailChange(event) {
        this.setState({emailAddress: event.target.value});
    }
    
    mobileChange(event) {
        this.setState({mobileNumber: event.target.value});
    }
    
    passwordChange(event) {
        this.setState({password: event.target.value});
    }
    
    handleSubmit(event) {
      event.preventDefault();
      const re = errors.regex.email;
      
      if(!re.test(this.state.emailAddress)) {
        this.setState({
          err: {
            mes: errors.validation.username,
            email: true,
            password:false
          }
        });
        console.log(this.state.err.mes);
      }
      else {
        this.setState({err: {email: false, password: false, mes:this.state.err.mes}}, () => {
          
          var obj = {
            UserPoolId: "ap-southeast-1_TB9GVW9nj",
            ClientId: "2a57aiojrldeloo774oritg30i",
            Email: this.state.emailAddress,
            PhoneNumber: this.state.mobileNumber,
            password: this.state.password
          }
          
          signIn(obj, this.signInCallback, this);
          console.log(JSON.stringify(obj));
          event.preventDefault();
        });  
      }
    }
    
    signInCallback(obj, err) {
      var message ="";
      
      if (obj == undefined) {
        message = err;
        
        for (var word in errors) {
          if (err.includes(word)) {
            for (var subword in errors[word]) {
              if(err.includes(subword)) {
                message = errors[word][subword]; 
                break;
              }
            }
          }
        }
        
        this.setState({
          err: {
            mes: message,
            email: false,
            password: false
          },
          vis:"visible"
        });
      }
      else {
        console.log('signing in ' +obj.Name);
        // this.props.pass.setEmail(this.state.emailAddress);
      
        this.setState({name: obj.Name}, ()=>{ this.setState({redirect: true})});
      }
    }
    
    hide () {this.setState({err: {email: false, password: false, mes:this.state.err.mes}});}
    
    getTarget() {
      if (this.state.err.email) {return ReactDOM.findDOMNode(this.emtarget);}
      if(this.state.err.password) {return ReactDOM.findDOMNode(this.patarget);}
    }
  

    
    onFormChoiceClick(event) {
      if(!this.state.on) {
        this.state.email.button = "active";
        this.state.mobile.button = "";
        this.state.email.form = {display: 'block'};
        this.state.mobile.form = {display: 'none'};
      }
      else {
        this.state.email.button = "";
        this.state.mobile.button = "active";
        this.state.email.form = {display: 'none'};
        this.state.mobile.form = {display: 'block'};
      }
      this.setState({on: !this.state.on});
      event.preventDefault();
    }
    
    
    render() {
    
        console.log("Rendering Sign Up Container");
        
        if (this.state.redirect === true) {
          console.log('redirecting...to sign in done');
          console.log(this.state.name+","+this.state.emailAddress);
          return (<Redirect to={{pathname: '/d', state: {email: this.state.emailAddress, name: this.state.name}}} />)
        }
        
        document.body.style.backgroundColor = "#3e8370";
        
        const sharedProps = {
          container: this,
          target: this.getTarget
        };
        
        return (
            <span className="signuppage">
              <PageHeader page="Sign-in"/> 
              <link rel="stylesheet" type="text/css" href="../styles/signup.css" />
              <div>
                <div className="container error-msg col-centered" style={{visibility:this.state.vis}}>
                  <p>
                    {this.state.err.mes}
                  </p>
              </div>
                <div className="container login-center">
                  <div className="row" style={{height: '100%'}}>
                    <div className="panel panel-login" style={{height: '100%'}}>
                      <div className="panel-heading">
                        <div className="row">
                          <div className="col-xs-6" style={{paddingRight: 0}}>
                            <a href="#" onClick={this.onFormChoiceClick} className={this.state.email.button} id="email-form-link">Email Address</a>
                          </div>
                          <div className="col-xs-6" style={{paddingLeft: 0}}>
                            <a href="#" onClick={this.onFormChoiceClick} className={this.state.mobile.button} id="mobile-form-link">Mobile Number</a>
                          </div>
                        </div>
                      </div>
                      <div className="panel-body" style={{paddingTop: 0}}>
                        <div className="row">
                          <div className="col-lg-12">
                            <form id="email-form" style={this.state.email.form}>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={Envelope} className="page-1" /></span>
                                <input type="email" name="email" id="email" tabIndex={1} className="form-control" placeholder="Enter Email" defaultValue 
                                value={this.state.emailAddress} onChange={this.emailChange} ref={email => {this.emtarget = email;}}/>
                                <Overlay show={this.state.err.email} placement="bottom" rootClose={true} onHide={this.hide} {...sharedProps} >
                                  <Tooltip id="overload-bottom" className="tooltips"><div className="tooltips"><p>{this.state.err.mes}</p></div></Tooltip>
                                </Overlay>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={Key} className="page-1" /></span>
                                <input type="password" name="password" id="password" tabIndex={2} className="form-control" placeholder="Enter Password" 
                                value={this.state.password} onChange={this.passwordChange} ref={password => {this.patarget = password;}}/>
                                <Overlay show={this.state.err.password} placement="bottom" rootClose={true} onHide={this.hide} {...sharedProps}>
                                  <Tooltip id="overload-bottom" className="tooltips"><div className="tooltips"><p>{this.state.err.mes}</p></div></Tooltip>
                                </Overlay>
                              </div>
                              <div className="input-group-checkbox">
                                <div className="checkbox">
                                  <label>
                                    <input id="login-remember" type="checkbox" name="remember" defaultValue={1} defaultChecked />Stay signed in
                                  </label>
                                </div>
                              </div>
                              <div className="form-group" style={{marginTop: '4.8%'}}>
                                <a onClick={this.handleSubmit} href="#" className="btn btn-primary" style={{backgroundColor: '#3e8370', width: 350, height: 40, paddingTop: 10}}>Sign In</a>
                              </div>
                              <p className="terms" style={{textAlign: 'center'}}><a>Forgot your password?</a></p>
                            </form>
                            <form id="mobile-form" style={this.state.mobile.form}>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={Mobile} className="page-2" /></span>
                                <input type="tel" name="phone" id="phone" tabIndex={1} className="form-control" placeholder="9086 8097"
                                value={this.state.mobileNumber} onChange={this.mobileChange}/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={Key} className="page-1" /></span>
                                <input type="password" name="password" id="password" tabIndex={2} className="form-control" placeholder="Enter Password" 
                                value={this.state.password} onChange={this.passwordChange}/>
                              </div>
                              <div className="input-group-checkbox">
                                <div className="checkbox">
                                  <label>
                                    <input id="login-remember" type="checkbox" name="remember" defaultValue={1} defaultChecked />Stay signed in
                                  </label>
                                </div>
                              </div>
                              <div className="form-group" style={{marginTop: '4.8%'}}>
                                <a onClick={this.handleSubmit} href="#" className="btn btn-primary" style={{backgroundColor: '#3e8370', width: 350, height: 40, paddingTop: 10}}>Sign In</a>
                              </div>
                              <p className="terms" style={{textAlign: 'center'}}><a>Forgot your password?</a></p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sign-in">
                  <div className="link"><Link to='/signup'>Sign Up</Link></div>
                </div>
              </div>
              <Footer />
            </span>
        )
    }
}

export default SignIn;