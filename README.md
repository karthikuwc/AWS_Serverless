# AWS Serverless


### Setting Up AWS Cloud9
We used the AWS Cloud9 IDE to set up an environment to create a serverless react web app. After provisioning a specific development environment, run the following commands to install environment updates required for compilation & testing.
```
//Install the latest version of node packet manager
npm install npm@latest -g

//Update to latest version of node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

nvm install node //This command needs to be run everytime instance reboots
```

Next install the local support for AWS's CodeBuild service. This allows you to avoid having to manually configure and invoke an AWS CodeBuild project. Local builds also take less time to complete. 
```
git clone https://github.com/aws/aws-codebuild-docker-images.git
cd aws-codebuild-docker-images
cd ubuntu/nodejs/8.11.0
docker build -t aws/codebuild/nodejs:8.11.0 .
docker pull amazon/aws-codebuild-local:latest --disable-content-trust=false
```

To run a loacal build with the same AWS permissions as granted to Cloud9 run the following script, ammending the artifacts and source paths accordingly. This command should be run in the root folder where "codebuild_build.sh" exists. A buildspec.yml file should exist in the source's root folder.
```javascript
./codebuild_build.sh -i aws/codebuild/nodejs:8.11.0 -a /home/ec2-user/environment/artifacts -s /home/ec2-user/environment/signUpInt -c
```

Next run the following commands to initialize a react app with default settings.
```
npx create-react-app my-app
cd my-app
npm start //This starts a local server that has hot-loading enabled.
```

There is a chance by this point your Cloud9 EC2 instance is running out of space so you can increase this by attaching another EBS volume to your cloud9 EC2 insatnce. You can check what is using up the most space using these commands.
```
df -T 
sudo du -x -h / | sort -h | tail -40
```

In this project styles are added to components with both css and jsx. To create deconflictling css files we can use less. Run the following command to install the less to css compiler.
```
npm install -g less
```

To compile a file from less to css run the following command.
```
lessc [styles].less [styles].css 
```

Lastly, run the following to install all of the node modules for this project.
```
npm install
```

### Programmatic Flow

```javascript
/* -> indicates all project relevant file locations accessed by parent path */

src/index.js /*Script entry point upon loading root URL*/ {
      
      -> src/routes/index.jsx /*Main routes*/ {
            
            ->src/signuppages/signIn.js
            ->src/signuppages/signInDone.js
            ->src/signuppages/signUp.js
            ->src/signuppages/signUpDOne.js
            ->src/layout/Dashboard.jsx {
            
                  ->src/components/Sidebar.jsx
                  ->src/routes/dashboard.jsx {
                  
                        ->src/views/Dashboard/Dashboard.jsx
                        ->src/views/Dashboard2/Dashboard.jsx
                  }
                  ->src/routes/sublist.jsx {
                        
                        ->src/views/Dashboard/Dashboard.jsx
                        ->src/views/Dashboard2/Dashboard.jsx
                  }
            }
      }
}

/*Similar paths in src/assets/jss/material-dashboard-react correspond to styles of components in src/components, src/views and src/layout*/
      
```

### Integrating AWS Cognito

We use AWS Cognito to manage users in our project. After creating a user pool and and attached client app in the AWS Cognito console, we use the Amazon Cognito Identity SDK (https://github.com/aws-amplify/amplify-js/tree/master/packages/amazon-cognito-identity-js) to create custom user action functions within our project (src/signupcommon/entry.js). These functions take user attributes, a user pool ID and a app client ID as arguments. They are asynchronous functions so callback functions need to be used to ensure pages execute correctly. An example of the sign-in functions implementation is shown below (src/signuppages/signIn.js)
```javascript
import {signIn} from 'signupcommon/entry';

handleSubmit(event) {
      //Preventing browser from performing default action for button click
      event.preventDefault();
      
      //Importing the regular expression from external file to test inputs.
      const re = errors.regex.email; 
      
      //Validating user input locally
      if(!re.test(this.state.emailAddress)) { 
      
        //Changing state of component to display err msg
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
        //this.setState can take a callback function as its second argument, whcih is called only after state is set.
        this.setState({err: {email: false, password: false, mes:this.state.err.mes}}, () => {
          
          //Get these details from cognito console.
          var obj = {
            UserPoolId: "ap-southeast-1_TB9GVW9nj",
            ClientId: "2a57aiojrldeloo774oritg30i",
            Email: this.state.emailAddress,
            PhoneNumber: this.state.mobileNumber,
            password: this.state.password
          }
          
          //signIn function is imported and takes an obj, a callback function and the current component as its arguments.
          //It is necessary to pass the current function so that this.setState can be called in the callback function.
          signIn(obj, this.signInCallback, this); //In signin callback 
          console.log(JSON.stringify(obj));
          event.preventDefault();
        });  
      }
    }
    
    //Callback function for signin. Meant to return an object with user attributes if sign-in successful.
    signInCallback(obj, err) {
      var message ="";
      
      //If sign-in unsuccessful error will be returned.
      if (obj == undefined) {
        message = err;
        
        //Identify error and return user friendly statement
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
      //If sign-in is succsessful a user attribute object will be returned.
      //However session validity is set by cognito function independently in browser cache.
      else {
        console.log('signing in ' +obj.Name);
        // this.props.pass.setEmail(this.state.emailAddress);
      
        this.setState({name: obj.Name}, ()=>{ this.setState({redirect: true})});
      }
    }
```


