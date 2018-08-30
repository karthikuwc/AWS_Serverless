import React from 'react';
import ReactDOM from 'react-dom';
import {Tooltip, Overlay} from 'react-bootstrap';

import {Redirect, Link} from "react-router-dom";

import {signUp} from 'signupcommon/entry';
import PageHeader from 'signupcommon/pageHeader';
import errors from 'signupcommon/error';
import Footer from 'signupcommon/footer';

import Envelope from "assets/img/resources/page-1-envelope.svg";
import User from "assets/img/resources/page-1-user.svg";
import Key from "assets/img/resources/key-icon.svg";
import Mobile from "assets/img/resources/page-1-mobile.svg";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailAddress: "",
        fullName: "",
        mobileNumber: "",
        password: "",
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
          mes:"Please enter an email and a password.",
          email: false,
          password: false,
        },
        vis:"hidden"
    };
    
    this.emailChange = this.emailChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.mobileChange = this.mobileChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUpCallback = this.signUpCallback.bind(this);
    this.onFormChoiceClick = this.onFormChoiceClick.bind(this);
    this.hide = this.hide.bind(this);
    this.getTarget = this.getTarget.bind(this);
  }
  
  emailChange(event) {
    this.setState({emailAddress: event.target.value});
  }

  nameChange(event) {
    this.setState({fullName: event.target.value});
  }
  
  mobileChange(event) {
    this.setState({mobileNumber: event.target.value});
  }
  
  passwordChange(event) {
    const renum = /[0-9]/;
    const relo = /[a-z]/;
    const reup = /[A-Z]/;
    
    this.setState({password: event.target.value}, () =>{

    if(this.state.password.length < 8) {
      this.setState({
        err: {
          mes: errors.policy.long,
          password: true,
          email:false
        }
      });
    }
    else if (!renum.test(this.state.password) || 
    !reup.test(this.state.password) || !relo.test(this.state.password)) {
      this.setState({
        err: {
          mes: errors.policy.numeric,
          password: true,
          email:false
        }
      });
    }
    else {
      this.setState({err: {password: false, email:false, mes:this.state.err.mes}});
    }
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const re = errors.regex.email;
    const rp = errors.regex.password;
    
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
    else if (!rp.test(this.state.password)) {
      this.setState({
        err: {
          mes: errors.validation.password,
          password: true,
          email:false
        }
      });
    }
    else {
      this.setState({err: {email: false, password: false, mes:this.state.err.mes}}, () => {
      
      var obj = {
        UserPoolId: "ap-southeast-1_TB9GVW9nj",
        ClientId: "2a57aiojrldeloo774oritg30i",
        Email: this.state.emailAddress,
        PhoneNumber: this.state.mobileNumber,
        Name: this.state.fullName,
        password: this.state.password
      };
      
      signUp(obj, this.signUpCallback, this);
      console.log(JSON.stringify(obj));
      });
    }
  }
  
  signUpCallback(email, err) {
    var message = "";
    
    if (email == undefined) {
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
          password:false,
          email:false
        },
        vis: "visible"
      });
        
    }
    else {
      this.setState({redirect: true});
    }
  }
  
  hide () {
    this.setState({err: {email: false, password: false, mes:this.state.err.mes}});
  }
  
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
        console.log('redirecting...to signupdone');
        return (<Redirect to={{pathname: '/signupdone', state: {email: this.state.emailAddress, name: this.state.fullName, signup: true}}} />)
      }
      
      document.body.style.backgroundColor = "#3e8370";
      
      const sharedProps = {
        container: this,
        target: this.getTarget
      };
      
      
      return (
          <span className="signuppage">
            <PageHeader page="Sign-up"/> 
            {/*<link rel="stylesheet" type="text/css" href="../styles/signup.css" />*/}
            <div>
                <div className="container error-msg col-centered" style={{visibility:this.state.vis}}>
                  <p>
                    {this.state.err.mes}
                  </p>
              </div>
                <div className="container col-centered">
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
                                <input type="email" name="email" id="email" tabIndex={1} className="form-control" placeholder="Enter Email" 
                                value={this.state.emailAddress} onChange={this.emailChange} ref={email => {this.emtarget = email;}}/>
                                <Overlay show={this.state.err.email} placement="bottom" rootClose={true} onHide={this.hide} {...sharedProps}>
                                <Tooltip id="overload-bottom" className="tooltips"><div className="tooltips"><p>{this.state.err.mes}</p></div></Tooltip>
                                </Overlay>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={User} className="page-1" /></span>
                                <input type="text" name="name" id="name" tabIndex={2} className="form-control" placeholder="Enter Full Name" 
                                value={this.state.fullName} onChange={this.nameChange}/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={Key} className="page-1" /></span>
                                <input type="password" name="password" id="password" tabIndex={3} className="form-control" placeholder="Enter a Password" 
                                value={this.state.password} onChange={this.passwordChange} ref={password => {this.patarget = password;}}/>
                                <Overlay show={this.state.err.password} placement="bottom" rootClose={true} onHide={this.hide} {...sharedProps}>
                                <Tooltip id="overload-bottom" className="tooltips"><div className="tooltips"><p>{this.state.err.mes}</p></div></Tooltip>
                               </Overlay>
                              </div>
                              <div className="terms " style={{textAlign: 'center'}}>By clicking Signup, I agree to the <a href="#">Terms of Service</a> and<br /> <a href="#">Privacy Policy</a>.</div>
                              <div className="form-group" style={{marginTop: '4.8%'}}>
                                <button className="btn btn-primary" style={{backgroundColor: '#3e8370', width: 350, height: 40, paddingTop: 10}} onClick={this.handleSubmit}>Sign-up</button>
                              </div>
                            </form>
                            <form id="mobile-form" style={this.state.mobile.form}>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={Mobile} className="page-2" /></span>
                                <input type="tel" name="phone" id="phone" tabIndex={1} className="form-control" placeholder="9086 8097"
                                value={this.state.mobileNumber} onChange={this.mobileChange}/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={User} className="page-1" /></span>
                                <input type="text" name="name" id="name" tabIndex={2} className="form-control" placeholder="Enter Full Name" style={{zIndex: 'auto'}} 
                                value={this.state.fullName} onChange={this.nameChange}/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon"><img src={Key} className="page-1" /></span>
                                <input type="password" name="password" id="password" tabIndex={3} className="form-control" placeholder="Enter a Password" 
                                value={this.state.password} onChange={this.passwordChange}/>
                              </div>
                              <p className="terms " style={{textAlign: 'center'}}>By clicking Signup, I agree to the <a href="#">Terms of Service</a> and<br /> <a href="#">Privacy Policy</a>.</p>
                              <div className="form-group" style={{marginTop: '4.8%'}}>
                                <button className="btn btn-primary" style={{backgroundColor: '#3e8370', width: 350, height: 40, paddingTop: 10}} onClick={this.handleSubmit}>Sign-up</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sign-in" style={{textAlign: 'center'}}>
                  <div className="link"><Link to='/signin'>Sign-in</Link></div>
                </div>
            </div>
            <Footer />
          </span>
      )
  }
}

export default SignUp;


