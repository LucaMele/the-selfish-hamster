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




