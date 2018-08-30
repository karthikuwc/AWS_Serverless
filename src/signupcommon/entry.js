import {CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';


console.log("Program to load");

const obj = {
    username: 'karthik',
    password: 'Password123',
    userPoolId: 'ap-southeast-1_LaAQ0o9IB',
    ClientId: '3nv8vmiag7qc7n5oq5hhh6fg57',
    newPassword: 'Password'
};

function newPasswordRequired(obj) {
    var authenticationData = {
        Username : obj.username,
        Password : obj.password,
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    
    var poolData = {
        UserPoolId : obj.userPoolId, // Your user pool id here
        ClientId : obj.ClientId // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var userData = {
    Username : obj.username,
    Pool : userPool
    };
    var cognitoUser = new CognitoUser(userData);
    
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log(result);
            var accessToken = result.getAccessToken().getJwtToken();
            
            /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
            var idToken = result.getIdToken().getJwtToken();
            
            console.log(idToken);
            // User authentication was successful
        },
    
        onFailure: function(err) {
            console.log(err);
            // User authentication was not successful
        },
    
        mfaRequired: function(codeDeliveryDetails) {
            // MFA is required to complete user authentication.
            // Get the code from user and call
            console.log(codeDeliveryDetails);
        },
    
        newPasswordRequired: function(userAttributes, requiredAttributes) {
            // User was signed up by an admin and must provide new
            // password and required attributes, if any, to complete
            // authentication.
    
            // the api doesn't accept this field back
            delete userAttributes.email_verified;
    
            // Get these details and call
            cognitoUser.completeNewPasswordChallenge(obj.newPassword, userAttributes, this);
        }
    });
}

function signIn(obj, callback, modalClass) {
    var authenticationData = {
        Username : obj.Email,
        Password : obj.password,
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    
    var poolData = {
        UserPoolId : obj.UserPoolId, // Your user pool id here
        ClientId : obj.ClientId // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var userData = {
    Username : obj.Email,
    Pool : userPool
    };
    var cognitoUser = new CognitoUser(userData);
    
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log(result);
            var accessToken = result.getAccessToken().getJwtToken();
            var name;
            var idToken = result.idToken.jwtToken;
            
            cognitoUser.getUserAttributes(function(err, result) {
                if (err) {
                    alert(err.message || JSON.stringify(err));
                    return;
                }
                for (var i = 0; i < result.length; i++) {
                    console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
                    if (result[i].getName() == 'name') name = result[i].getValue();
                    console.log(name);
                }
                console.log(idToken);
                if(typeof(callback) == "function") callback.call(modalClass, {Token:idToken, Name:name}, undefined);
            });
            
            
            /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
            
            // if(typeof(callback) == "function") callback.call(modalClass, obj, undefined);
            
            // User authentication was successful
        },
    
        onFailure: function(err) {
            if(typeof(callback) == "function") callback.call(modalClass, undefined, err.message || JSON.stringify(err));
            // User authentication was not successful
        }
    });
}

function signOut(obj) {
    
    var poolData = {
        UserPoolId : obj.UserPoolId, // Your user pool id here
        ClientId : obj.ClientId // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    
    var userData = {
        Username : obj.Email,
        Pool : userPool
    };
    var cognitoUser = new CognitoUser(userData);
    
    cognitoUser.signOut();
    
}

function signUp(obj, callback, modalClass) {
    
    var poolData = {
        UserPoolId : obj.UserPoolId, // Your user pool id here
        ClientId : obj.ClientId // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);

    var attributeList = [];

    var dataEmail = {
        Name : 'email',
        Value : obj.Email
    };

    var dataPhoneNumber = {
        Name : 'phone_number',
        Value : obj.PhoneNumber
    };
    
    var dataName = {
        Name : 'name',
        Value : obj.Name
    };
    
    var attributeEmail = new CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    var attributeName = new CognitoUserAttribute(dataName);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeName);

    userPool.signUp(obj.Email, obj.password, attributeList, null, function(err, result){
        if (err) {
            if(typeof(callback) == "function") callback.call(modalClass, undefined, err.message || JSON.stringify(err));
            return;
        }
        var cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        if(typeof(callback) == "function") callback.call(modalClass, cognitoUser.getUsername(), undefined);
    });
}

function update(obj, callback, modalClass) {
    
    var poolData = {
        UserPoolId : obj.UserPoolId, // Your user pool id here
        ClientId : obj.ClientId // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();

    if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('session validity: ' + session.isValid());

            var attributeList = [];
            var dataName = {
                Name : 'name',
                Value : obj.Name
            };
            var attribute = new CognitoUserAttribute(dataName);
            attributeList.push(attribute);
        
            cognitoUser.updateAttributes(attributeList, function(err, result) {
                if (err) {
                    callback.call(modalClass, err.message || JSON.stringify(err));
                    return;
                }
                console.log('call result: ' + result);
                callback.call(modalClass, result);
            });

        });
    }

}

function checkValid(obj) {
    var poolData = {
        UserPoolId : obj.UserPoolId, // Your user pool id here
        ClientId : obj.ClientId // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();
    
    var valid;

    if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                valid = session.isValid();
            }
            else {
                console.log('session validity: ' + session.isValid());
                valid = session.isValid();
            }
        });
    } else {
        valid = false;
    }
    
    return valid;
}

export {signIn, signOut, signUp, update, checkValid};

