const errors = {
    "validation": {
        "username": "Please enter a valid email-address.",
        "password": "Please enter a valid password."
    },
    
    "Invalid": {
        "email": "Please enter a valid email-address."
    },
    
    "policy": {
        "uppercase": "Your password must include an uppercase, lowercase, and numeric character.",
        "lowercase": "Your password must include an uppercase, lowercase, and numeric character.",
        "long": "Your password must be at least 8 characters long.",
        "numeric": "Your password must include an uppercase, lowercase, and numeric character."
    },
    
    "User": {
        "exist.": "This usernmae does not exist."
    },
    
    "Missing": {
        "USERNAME": "Please enter a username."
    },
    
    "Incorrect": {
        "password": "The password entered is incorrect."
    },
    
    "regex": {
        "email": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "password": /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/
    }
};

export default errors;
