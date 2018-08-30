import React from 'react';
import {Popover, OverlayTrigger} from 'react-bootstrap';

class Footer extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
    
        console.log("Rendering Page Footer");
        
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
          </Popover>);
        
        return (
            <span className="signupdonepage">
            <div className="page-footer" id="footer">
                
                <div className="container-fluid">
                  <div className="row">
                    <div className="text-center">
                      <a className="link">Help Center</a>
                      <a className="link">Privacy</a>
                      <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                      <a tabIndex={0} className="link">
                      <i className="glyphicon glyphicon-option-horizontal" />
                      </a>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
            </div>
            </span>
        
        )
    }
}

export default Footer;