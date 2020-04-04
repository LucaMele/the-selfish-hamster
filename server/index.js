import {createConnection} from "typeorm";
import {User} from "./entity/User";
const express = require('express')
import * as bodyParser from "body-parser";
import * as cors from  "cors";
import {Request, Response} from "express";
const env = process.argv.filter(arg => ~arg.indexOf('ENV')).map(arg => arg.split('=')[1])[0]


// connection settings are in the "ormconfig.json" file
createConnection().then(connection => {

  const user = new User();
  user.firstName = "hamster";
  user.lastName = "hamster";

  // create and setup express app

  const app = express()
  const port = 3000


  if (env === 'dev') {
    //const _cors = cors()
    //app.use(cors);
  }

  app.use(bodyParser.json());

  const userRepository = connection.getRepository(User);

  app.get("/users", async function(req, res) {
    const users = await userRepository.find();
    res.json(users);
  });

  app.get("/users/:id", async function(req, res) {
    const results = await userRepository.findOne(req.params.id);
    return res.send(results);
  });

  app.post("/users", async function(req, res) {
    const user = await userRepository.create(req.body);
    const results = await userRepository.save(user);
    return res.send(results);
  });

  app.put("/users/:id", async function(req, res) {
    const user = await userRepository.findOne(req.params.id);
    userRepository.merge(user, req.body);
    const results = await userRepository.save(user);
    return res.send(results);
  });

  app.delete("/users/:id", async function(req, res) {
    const results = await userRepository.delete(req.params.id);
    return res.send(results);
  });

  if (env !== 'dev') {
    app.use(express.static('dist'));
  }

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
