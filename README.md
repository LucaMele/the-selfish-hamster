# the-selfish-hamster

Our app is deployed at
http://the-selfish-hamster.herokuapp.com/

## Prereq

- install npm
- install mongodb [mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition)

### install mongodb
```bash
brew tap mongodb/brew
brew install mongodb-community
```

install as a service
```bash
brew services start mongodb-community
```

## Build Setup

### Production

``` bash
# starts the server for production (includes the frontend build)
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

issues with python?
check out the link https://apple.stackexchange.com/questions/160171/install-and-import-site-packages-for-python-2-and-3-on-mac



### Development stage

To properly debug in your webbrowser install the extension `Vue.js devtools`. Then you can use it in the development tools of the browser while on a vue.js webpage.

``` bash
# install dependencies
npm install

# serve only frontend with hot reload at localhost:8080
npm run dev

# serve frontend with hot reload at localhost:8080 and backend at localhost:3000
npm run start-dev
```

### Test

``` bash
# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### API docu

deployed on postman documenter
https://documenter.getpostman.com/view/747654/SzYbxwbF?version=latest

### App design

edit on figma
https://www.figma.com/file/X26tYhLriAn2aNOK837Py5/The-Selfish-Hamster?node-id=0%3A1$

preview 1.use base figma
https://www.figma.com/proto/X26tYhLriAn2aNOK837Py5/The-Selfish-Hamster?node-id=7%3A63&viewport=537%2C486%2C0.5493106245994568&scaling=scale-down


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Heroku
## Access APP
http://the-selfish-hamster.herokuapp.com/

## access frontend / deploy
we need to add your account as collaborator in https://dashboard.heroku.com/apps/the-selfish-hamster/access

## see application logs

install heroku cli  https://devcenter.heroku.com/articles/heroku-cli#download-and-install

run
`heroku logs --app the-selfish-hamster`




