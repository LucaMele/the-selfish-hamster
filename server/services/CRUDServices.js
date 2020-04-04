
// eslint-disable-next-line import/prefer-default-export

// eslint-disable-next-line import/prefer-default-export
export class CRUDServices {
  // eslint-disable-next-line class-methods-use-this
  Register(app, connection, modelName, type) {
    const repo = connection.getRepository(type);

    app.get(modelName, async (req, res) => {
      const objects = await repo.find();
      res.json(objects);
    });

    // eslint-disable-next-line consistent-return
    app.get(`${modelName}/:id`, async (req, res) => {
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

    app.post(modelName, async (req, res) => {
      try {
        const obj = repo.create(req.body);
        return repo.save(obj)
          .then(results =>
            (results != null ?
              res.status(201).send(results) : res.status(404).send(`type ${type.name.toString()} with id ${req.params.id} not found`)))
          .catch(reason => res.status(404).send(`error: ${reason}`));
      } catch (e) {
        return res.status(400).send(e.toString());
      }
    });

    app.put(`${modelName}/:id`, async (req, res) => {
      const obj = await repo.findOne(req.params.id);
      repo.merge(obj, req.body);
      const results = await repo.save(obj);
      return res.send(results);
    });

    app.delete(`${modelName}/:id`, async (req, res) => {
      const obj = await repo.findOne(req.params.id);
      if (obj != null) {
        await repo.delete(req.params.id);
        return res.status(200);
      }
      return res.status(404).send(`type ${type.name.toString()} with id ${req.params.id} not found`);
    });
  }
}
