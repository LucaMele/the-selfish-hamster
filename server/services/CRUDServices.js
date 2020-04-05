

class InjectDefaultAction {
  constructor(app, connection) {
    this.app = app;
    this.connection = connection;
  }
  UpdateBeforePost(object) {
    return object;
  }
}


// eslint-disable-next-line import/prefer-default-export
export class CRUDServices {
  // eslint-disable-next-line class-methods-use-this
  Register(prefix, app, connection, modelName, type, injector) {
    const repo = connection.getRepository(type);
    const inject = injector != null ? injector : new InjectDefaultAction(app, connection);

    app.get(prefix + modelName, async (req, res) => {
      const objects = await repo.find();
      res.json(objects);
    });

    // eslint-disable-next-line consistent-return
    app.get(`${prefix}${modelName}/:id`, async (req, res) => {
      try {
        return repo.findOne(req.params.id)
          .then(results =>
            (results != null ?
              res.status(200).send(results) : res.status(404).send(`type ${type.name.toString()} with id ${req.params.id} not found`)))
          .catch(reason => res.status(404).send(`error: ${reason}`));
      } catch (e) {
        return res.status(400).send(e.toString());
      }
    });

    app.post(prefix + modelName, async (req, res) => {
      try {
        const obj = inject.UpdateBeforePost(repo.create(req.body));
        obj.timestamp = new Date();
        return repo.save(obj)
          .then(results =>
            (results != null ?
              res.status(201).send(results) : res.status(404).send(`type ${type.name.toString()} with id ${req.params.id} not found`)))
          .catch(reason => res.status(404).send(`error: ${reason}`));
      } catch (e) {
        return res.status(400).send(e.toString());
      }
    });

    app.put(`${prefix}${modelName}/:id`, async (req, res) => {
      const obj = inject.UpdateBeforePost(await repo.findOne(req.params.id));
      obj.timestamp = new Date();
      repo.merge(obj, req.body);
      const results = await repo.save(obj);
      return res.send(results);
    });

    app.delete(`${prefix}${modelName}/:id`, async (req, res) => {
      const obj = await repo.findOne(req.params.id);
      if (obj != null) {
        await repo.delete(req.params.id);
        return res.status(200);
      }
      return res.status(404).send(`type ${type.name.toString()} with id ${req.params.id} not found`);
    });
  }
}

