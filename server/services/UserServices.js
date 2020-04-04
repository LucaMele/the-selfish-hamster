import {User} from "../entity/User";

export class UserServices {

  Register(app, connection) {
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
      const user = userRepository.create(req.body);
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

  }

};
