import {createConnection} from "typeorm";
const express = require('express')
import * as bodyParser from "body-parser";
import * as cors from  "cors";
const env = process.argv.filter(arg => ~arg.indexOf('ENV')).map(arg => arg.split('=')[1])[0]

import {User} from "./entity/User";
import {UserServices} from "./services/UserServices";
import {ProfileServices} from "./services/ProfileServices";


// connection settings are in the "ormconfig.json" file
createConnection().then(connection => {

  const user = new User();
  user.firstName = "hamster";
  user.lastName = "hamster";

  // create and setup express app

  const app = express();
  const port = 3000;

  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());

  if (env === 'dev') {
    //const _cors = cors()
    //app.use(cors);
  }

  if (env !== 'dev') {
    app.use(express.static('dist'));
  }

  new UserServices().Register(app, connection);
  new ProfileServices().Register(app, connection);

  // start express server
  app.listen(3000);

  /*
  return connection
    .getRepository(User)
    .save(user)
    .then(user => {
      console.log("user has been saved: ", user);
    });
  */

}).catch(error => console.log("Error: ", error));
