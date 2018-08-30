# AWS Serverless


### Setting Up AWS Cloud9
We used the AWS Cloud9 IDE to set up an environment to create a serverless react web app. After provisioning a specific development environment, run the following commands to install environment updates required for compilation & testing.
```shell
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
```javascript
git clone https://github.com/aws/aws-codebuild-docker-images.git
cd aws-codebuild-docker-images
cd ubuntu/nodejs/8.11.0
docker build -t aws/codebuild/nodejs:8.11.0 .
docker pull amazon/aws-codebuild-local:latest --disable-content-trust=false
```

To run a loacal build with the same AWS permissions as granted to Cloud9 run the following script, ammending the artifacts and source paths accordingly. This command should be run in the root folder where "codebuild_build.sh" exists.
```javascript
./codebuild_build.sh -i aws/codebuild/nodejs:8.11.0 -a /home/ec2-user/environment/artifacts -s /home/ec2-user/environment/signUpInt -c
```

Next run the following commands to initialize a react app with default settings.
```javascript
npx create-react-app my-app
cd my-app
npm start //This starts a local server that has hot-loading enabled.
```

There is a chance by this point your Cloud9 EC2 instance is running out of space so you can increase this by attaching another EBS volume to your cloud9 EC2 insatnce. You can check what is using up the most space using these commands.
```javascript
df -T 
sudo du -x -h / | sort -h | tail -40
```

In this project styles are added to components with both css and jsx. To create deconflictling css files we can use less. Run the following command to install the less to css compiler.
```javascript
npm install -g less
```

