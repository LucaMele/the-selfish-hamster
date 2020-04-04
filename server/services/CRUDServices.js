
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

    app.get(`${modelName}/:id`, async (req, res) => {
      const results = await repo.findOne(req.params.id);
      return res.send(results);
    });

    app.post(modelName, async (req, res) => {
      const obj = repo.create(req.body);
      const results = await repo.save(obj);
      return res.send(results);
    });

    app.put(`${modelName}/:id`, async (req, res) => {
      const obj = await repo.findOne(req.params.id);
      repo.merge(obj, req.body);
      const results = await repo.save(obj);
      return res.send(results);
    });

    app.delete(`${modelName}/:id`, async (req, res) => {
      const results = await repo.delete(req.params.id);
      return res.send(results);
    });
  }
}
