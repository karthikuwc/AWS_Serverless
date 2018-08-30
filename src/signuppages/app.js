import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, browserHistory} from "react-router-dom";


import AsyncComponent from '../common/AsyncComponent';

const footer = () => import(/* webpackChunkName: "footer" */ '../common/footer');
const signup = () => import(/* webpackChunkName: "signup" */ './signUp');
const home = () => import(/* webpackChunkName: "home" */ './home');
const signupdone = () => import(/*webpackChunkName: "signupdone"*/ './signUpDone');
const signin = () => import(/*webpackChunkName: "signin"*/ './signIn');
const signindone = () => import(/*webpackChunkName: "signindone"*/ './signInDone');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: ""
        };
        
        this.navSignUpDone = this.navSignUpDone.bind(this);
    }
    
    navSignUpDone(email) {
         this.setState({emailAddress: email});
         console.log("set email"+ this.state.emailAddress);
    }
    
    render() {
        console.log("Router");
        return (
          <Router history={browserHistory}>
            <div>
                <Switch>
                 <Route exact path="/" render={() => <AsyncComponent moduleProvider={home} pass="" />}/>
                 
                 <Route path="/d">
                     <div>
                        {/*<Route render={() => <PageHeader page="Sign-up"/>}/>*/}
                            <Route path="/d/signup" render={()=><AsyncComponent pass={{navSignUpDone: this.navSignUpDone}} moduleProvider={signup}/>}/>
                            
                            <Route path="/d/signupdone" render={()=><AsyncComponent pass={{email: this.state.emailAddress}} moduleProvider={signupdone}/>}/>
                            
                            <Route path="/d/signin" render={()=><AsyncComponent pass={{setEmail: this.navSignUpDone}} moduleProvider={signin}/>}/>
                            
                            <Route path="/d/signindone" render={()=><AsyncComponent pass={{email: this.state.emailAddress}} moduleProvider={signindone}/>}/>
                            
                        <Route render={() => <AsyncComponent pass='' moduleProvider={footer}/>}/>
                     </div>
                 </Route>
                 
                </Switch>
            </div>
          </Router>
        );
    }
}

export default App;
