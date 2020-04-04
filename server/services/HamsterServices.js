import { Profile } from '../entity/Profile';
import { ToiletQuestion } from '../entity/ToiletQuestion';

// eslint-disable-next-line import/prefer-default-export
export class HamsterServices {
  Register(app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const toiletQuestionRepository = connection.getRepository(ToiletQuestion);

    // profileId
    app.get(`/hamster/:id`, async (req, res) => {
      const profile = await profileRepository.findOne(req.params.id);
      if (profile)  {
        const questions = await toiletQuestionRepository.find({ where: { profileId: profile.id } });
        const result = {
          profile: {
            ...profile
          },
          questions
        };
        return res.send(result);
      }

      return res.send({});
    });

  }
}
