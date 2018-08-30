import React from 'react';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "styles/homepage.css";

import GlideSpotLogo from "assets/img/resources/glide-spot-logo-coloured.svg";
import HeadLogo from "assets/img/resources/head-icon.svg";
import TopPage from "assets/img/resources/top-page.svg";
import Timer from "assets/img/resources/timer.svg";
import Secure from "assets/img/resources/secure.svg";
import Unlimited from "assets/img/resources/unlimited.svg";
import Dashboard from "assets/img/resources/dashboard.svg";
import Privacy from "assets/img/resources/privacy.svg";
import Encrypt from "assets/img/resources/encrypt.svg";
import Block3 from "assets/img/resources/block-3.svg";
import Block4 from "assets/img/resources/block-4.svg";
import Block5 from "assets/img/resources/block-5.svg";
import Block7 from "assets/img/resources/block-7.svg";



class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
    
        console.log("Rendering Home");
        console.log(this.props.location.state);
        
        const popoverTop = (
          <Popover id="popover-positioned-top">
          <div style={{textAlign: "center"}}>
            <a href>About</a><br />
            <a href>Marketplace</a><br />
            <a href>Blog</a><br />
            <a href>Get-Set-Go</a><br />
            <a href>Own a GlideSpot</a><br />
            <a href>Contact</a><br />
            <a href>Terms of Use</a>
          </div>
          </Popover>
        );
        
        return (
            <div className="homepage">
              {/*<link rel="stylesheet" href="assets/img/styles/home2.css" />*/}
              <nav className="navbar navbar-default navbar-static-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <div id="vl" />
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a href="/" className="img-svg"><span><img src={GlideSpotLogo} /></span></a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a style={{ color: 'white' }} href="#">Get-Set-GO</a></li>
                    <li><a style={{ color: 'white' }} href="#">Help Center</a></li>
                    <li><a style={{ color: 'white' }} href="#">GlideStore</a></li>
                    <li><a><Link style={{ color: 'white' }} to="/signup">Sign-up</Link></a></li>
                    <li><a href="#"><Link to="/signin" style={{ color: 'white' }}><span className="signin"><img src={HeadLogo} className="d-inline-block align-top head-icon" alt />Sign-in</span></Link></a></li>
                  </ul>
                </div>
              </div>
            </nav>
            {/*container block 1*/}
            <div className="container block-1">
              <div className="row">
                <h1 id="mobile-view" style={{textAlign: 'center', color: 'white', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)', marginBottom: 10, marginTop:"15%", fontSize:"60px"}}>Make your WiFi Do More</h1>
                <div className="container" style={{position: 'relative', textAlign: 'center', color: 'white'}}>
                  <img src={TopPage} />
                  <h1 id="desktop-view" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)'}}>Make your WiFi Do More</h1>
                </div>
                <h2 style={{paddingTop: 35, fontFamily: '"Lato", sans-serif', textAlign: 'center', color: '#fff'}}>AI-Ready Cloud WiFi for Small Business</h2>
                <div id="desktop-view">
                  <h4 style={{fontSize: 20, textAlign: 'center', color: '#fff'}}>Better Productivity   •   Better Security   •   Better Performance</h4>
                </div>
                <div id="mobile-view">
                  <ul style={{textAlign: 'center', color: '#fff', fontSize: 20}} id="block1">
                    <li>Better Productivity</li>
                    <li>Better Security</li>
                    <li>Better Performance</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*container block 2*/}
            <div className="container block-2">
              <h2 style={{marginBottom: '5%', textAlign: 'center'}}>Quick Setup, Awesome Features</h2>
              <div className="container col-md-4 col-xs-6">
                <div className="header">
                  <span><img src={Timer} style={{float: 'left'}} /></span>
                  <h4>1-Minute Setup</h4>
                </div>
                <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                <a>Learn More &gt;</a>
              </div>
              <div className="container col-md-4 col-xs-6">
                <div className="header">
                  <span><img src={Secure} /></span>
                  <h4>Lot More Secure</h4>
                </div>
                <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                <a>Learn More &gt;</a>
              </div>
              <div className="container col-md-4 col-xs-6">
                <div className="header">
                  <span><img src={Unlimited} /></span>
                  <h4>Free and Unlimited</h4>
                </div>
                <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                <a>Learn More &gt;</a>
              </div>
              <div className="container col-md-4 col-xs-6">
                <div className="header">
                  <span><img src={Dashboard} /></span>
                  <h4>Visual Dashboard</h4>
                </div>
                <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                <a>Learn More &gt;</a>
              </div>
              <div className="container col-md-4 col-xs-6">
                <div className="header">
                  <span><img src={Privacy} /></span>
                  <h4>Privacy Control</h4>
                </div>
                <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                <a>Learn More &gt;</a>
              </div>
              <div className="container col-md-4 col-xs-6">
                <div className="header">
                  <span><img src={Encrypt} /></span>
                  <h4>Encrypt Your Traffic</h4>
                </div>
                <p>You decide how much of your data can be seen by the hotspot provider. You can disable/alter privacy settings.</p>
                <a>Learn More &gt;</a>
              </div>
            </div>
            {/*container block 3*/}
            <div className="container block-3 big-block" style={{backgroundColor: '#dbf2ed'}}>
              <div className="article-content">
                <div className="row">
                  <div className="col-xs-6 col-1" style={{paddingLeft: '6%'}}>
                    <h6>Access</h6>
                    <h4>Hassle-Free Visitor Wi-Fi</h4>
                    <p>You get instant access to Wi-Fi, lot more secure and peace of mind.</p>
                  </div>
                  <div className="col-xs-6" style={{paddingRight: '6%'}}>
                    <img src={Block3} className="Page-1" style={{float: 'right'}} />
                  </div>
                </div>
              </div>
            </div>
            {/*container block 4*/}
            <div className="container block-4 big-block" style={{backgroundColor: '#fff'}}>
              <div className="article-content">
                <div className="row">
                  <div className="col-xs-6" style={{paddingLeft: '6%'}}>
                    <img src={Block4} style={{float: 'left'}} />
                  </div>
                  <div className="col-xs-6 col-1" style={{paddingRight:'6%'}}>
                    <h6>Analytics</h6>
                    <h4>Keep track of your Wi-Fi usage and keep track of yourself</h4>
                    <p>Get to know your browsing habits, time spent at different GlideBit hotspots, know yourself.</p>
                  </div>
                </div>
              </div>
            </div>
            {/*container block 5*/}
            <div className="container block-5 big-block" style={{backgroundColor: '#dbf2ed'}}>
              <div className="article-content">
                <div className="row">
                  <div className="col-xs-6 col-1" style={{paddingLeft: '6%'}}>
                    <h6>Privacy</h6>
                    <h4>Keep your web traffic to yourself</h4>
                    <p>Whether you are surfing your company website, our Facebook, keep your web traffic private by encrypting all your Internet traffic.</p>
                  </div>
                  <div className="col-xs-6" style={{paddingRight: '6%'}}>
                    <img src={Block5} style={{float: 'right'}} />
                  </div>
                </div>
              </div>
            </div>
            {/*container block 6*/}
            <div className="container block-6">
              <div className="row row-divided">
                <div className="container col-md-6 col-xs-12 column-one" style={{paddingTop: '5%', paddingBottom: '5%', color: 'white', textAlign: 'center'}}>
                  <h4 style={{marginBottom: '3%', fontSize: 20}}>Get Started With GlideSpot</h4>
                  <h6 style={{marginBottom: '3%', fontSize: 16}}>Create Your Account</h6>
                  <Link to="/d/signup" style={{ color: 'white' }}><button className="btn btn-primary" style={{width: '20%', backgroundColor: '#4dbea4', border: '1px solid #fff', fontSize: 18}}>Sign-up</button></Link>
                </div>
                <div className="horizontal-divider" style={{color: 'white'}}>
                  <hr /><p>   OR  </p><hr />
                </div>
                <div className="vertical-divider" style={{color: 'white'}}>or</div>
                <div className="container col-md-6 col-xs-12 column-two" style={{paddingTop: '5%', paddingBottom: '5%', color: 'white', textAlign: 'center'}}>
                  <h4 style={{marginBottom: '3%', fontSize: 20}}>Request a Demo</h4>
                  <h6 style={{marginBottom: '3%', fontSize: 16}}>GlideSpot in Action</h6>
                  <button className="btn btn-primary" style={{width: '20%', backgroundColor: '#4dbea4', border: '1px solid #fff', fontSize: 18}}>Contact Us</button>
                </div>
              </div>
            </div>
            {/*container block 7*/}
            <div className="container block-7" style={{paddingBottom: '5%'}}>
              <div className="row">
                <div className="container" style={{paddingTop: '5%', paddingBottom: '5%', textAlign: 'center'}}>
                  <img src={Block7} className="block-img" />
                </div>
                <div id="bottom-logo">
                  <img id="logo" src={GlideSpotLogo} style={{textAlign: 'center'}} />
                  <div className="container col-xs-12 col-md-2" style={{float: 'right'}}>
                    <ul aria-label="Set-up a GlideSpot">
                      <li>GlideStore</li>
                      <li>GlideX WiFi Devices</li>
                      <li>What is a GlideSpot</li>
                      <li>What is GlideX WiFi</li>
                    </ul>
                  </div>
                  <div className="container col-xs-12 col-md-2" style={{float: 'right'}}>
                    <ul aria-label="Other">
                      <li>Terms of Use</li>
                      <li>Support</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                  <div className="container col-xs-12 col-md-2" style={{float: 'right'}}>
                    <ul aria-label="Company">
                      <li>About</li>
                      <li>Contact</li>
                      <li>Careers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*footer for desktop*/}
            <div id="footer" className="desktop-view">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <a className="link" href="#">Status</a>
                    <a className="link" href="#">Privacy &amp; Terms</a>
                    <a className="link" href="#">Contact</a>
                  </div>
                  <div className="text-right col-sm-6">
                    <a className="link" href="#">Copyright 2018 - GlideX</a>
                  </div>
                </div>
              </div>
            </div>
            {/*footer for mobile*/}
            <div id="footer" className="mobile-view">
              <div className="container-fluid">
                <div className="row">
                  <div className="text-center">
                    <a className="link">Help Center</a>
                    <a className="link">Privacy</a>
                    
                    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                      <a>
                      <i className="glyphicon glyphicon-option-horizontal" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Home;