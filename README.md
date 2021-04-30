# itsTechNova Website

**Checkout the live website: [www.itstechnova.com](http://itstechnova.com/)**  
**Temp link until DNS stuff gets sorted out: [https://itstechnova.netlify.app/](https://itstechnova.netlify.app/)**


## Getting Started

Clone the project: 
```
git clone https://github.com/itstechnova/itstechnova.com 
```
Navigate to project directory and install required packages:
```
cd itstechnova.com
yarn install
```
Run the following to view live changes on http://localhost:3000
```
yarn start
```


## Deployment

Netlify is set up to **automatically trigger a deployment** when you push to main.  
To see build status and analytics, login by email here: https://app.netlify.com/ 
```
email: hacktechnova@gmail.com
password: Technova123!
```
Unfortunately the free plan does not allow for adding team members.

## Development Tips

#### Naming Convention

- Name your branches `feature/ticket#-title`, where ticket# refers to the task id you are working on
- e.g. feature/12-create-nav-bar

#### Pull Requests & Commits

- Always write a descriptive commit message in the following format: `ticket#: description`
- Write a detailed, but not overly detailed description of the feature or bug fixes when creating a PR
- AVOID pushing directly to dev and main

#### Other Tips

- Always run `yarn install` after pulling from master or checking out to a remote branch
- Always update your local master branch by running `git pull` everytime a PR is merged to minimize the need to resolve conflicts when you are creating a PR

