import { Profile } from '../entity/Profile';

export class ProfileServices {
  Register(app, connection) {
    const profileRepository = connection.getRepository(Profile);

    app.get('/profiles', async (req, res) => {
      const profiles = await profileRepository.find();
      res.json(profiles);
    });

    app.get('/profiles/:id', async (req, res) => {
      const results = await profileRepository.findOne(req.params.id);
      return res.send(results);
    });

    app.post('/profiles', async (req, res) => {
      const profile = profileRepository.create(req.body);
      const results = await profileRepository.save(profile);
      return res.send(results);
    });

    app.put('/profiles/:id', async (req, res) => {
      const profile = await profileRepository.findOne(req.params.id);
      profileRepository.merge(profile, req.body);
      const results = await profileRepository.save(profile);
      return res.send(results);
    });

    app.delete('/profiles/:id', async (req, res) => {
      const results = await profileRepository.delete(req.params.id);
      return res.send(results);
    });
  }
}
