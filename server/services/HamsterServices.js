import { ObjectID } from 'mongodb';
import { Profile } from '../entity/Profile';
import { ToiletQuestion } from '../entity/ToiletQuestion';
import { EmergencyStockQuestion } from '../entity/EmergencyStockQuestion';
import { ToiletAnswer } from '../entity/ToiletAnswer';

// eslint-disable-next-line import/prefer-default-export
export class HamsterServices {
  Register(app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const toiletQuestionRepository = connection.getRepository(ToiletQuestion);
    const toiletAnswerRepository = connection.getRepository(ToiletAnswer);
    const emergencyStockQuestionRepository = connection.getRepository(EmergencyStockQuestion);

    // profileId
    app.get('/hamster/:id', async (req, res) => {
      const profile = await profileRepository.findOne(new ObjectID(req.params.id));
      if (profile) {
        const toiletQuestions = await toiletQuestionRepository.find({ where: { profileId: req.params.id } });
        const toiletAnswers = await toiletAnswerRepository.find({ where: { profileId: req.params.id } });
        const emergencyStockQuestions = await emergencyStockQuestionRepository.find({ where: { profileId: req.params.id } });
        const toiletQnA = [];
        for (const toiletQuestion of toiletQuestions) {
          for (const toiletAnswer of toiletAnswers) {
            if (toiletQuestion.id.toString() === toiletAnswer.questionId) {
              toiletQnA.push({ question: toiletQuestion, answer: toiletAnswer });
            } else {
              toiletQnA.push({ question: toiletQuestion, answer: null });
            }
          }
        }
        const result = {
          profile: {
            ...profile,
          },
          toiletQnA,
          emergencyStockQuestions,
        };
        return res.status(200).send(result);
      }
      return res.status(404).send(`type ${Profile.name.toString()} with id ${req.params.id} not found`);
    });
  }
}
