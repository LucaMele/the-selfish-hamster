import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';

import { User } from './entity/User';
import { UserServices } from './services/UserServices';
import { ProfileServices } from './services/ProfileServices';
import { ToiletQuestionServices } from './services/ToiletQuestionServices';
import { ToiletAnswerServices } from './services/ToiletAnswerServices';
import { HamsterServices } from './services/HamsterServices';
import { EmergencyStockQuestionServices } from './services/EmergencyStockQuestionServices';

const express = require('express');
const cors = require('cors');

const env = process.argv.filter(arg => ~arg.indexOf('ENV')).map(arg => arg.split('=')[1])[0];


// connection settings are in the "ormconfig.json" file
createConnection().then((connection) => {
  const user = new User();
  user.firstName = 'hamster';
  user.lastName = 'hamster';

  // create and setup express app

  const app = express();
  const port = 3000;

  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());

  if (env === 'dev') {
    app.use(cors());
  }

  if (env !== 'dev') {
    app.use(express.static('dist'));
  }

  new UserServices().Register(app, connection);
  new ProfileServices().Register(app, connection);
  new ToiletQuestionServices().Register(app, connection);
  new ToiletAnswerServices().Register(app, connection);
  new HamsterServices().Register(app, connection);
  new EmergencyStockQuestionServices().Register(app, connection);

  // start express server
  app.listen(3000);
}).catch(error => console.log('Error: ', error));
