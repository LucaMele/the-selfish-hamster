import { ObjectID } from 'mongodb';
import { Profile } from '../entity/Profile';
import { ToiletQuestion } from '../entity/ToiletQuestion';
import { EmergencyStockQuestion } from '../entity/EmergencyStockQuestion';
import { ToiletAnswer } from '../entity/ToiletAnswer';
import { EmergencyStockAnswer } from '../entity/EmergencyStockAnswer';

// eslint-disable-next-line import/prefer-default-export
export class HamsterServices {
  Register(prefix, app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const toiletQuestionRepository = connection.getRepository(ToiletQuestion);
    const toiletAnswerRepository = connection.getRepository(ToiletAnswer);
    const emergencyStockQuestionRepository = connection.getRepository(EmergencyStockQuestion);
    const emergencyStockAnswerRepository = connection.getRepository(EmergencyStockAnswer);

    // profileId
    app.get(`${prefix}/hamster/:id`, async (req, res) => {
      const profile = await profileRepository.findOne(new ObjectID(req.params.id));
      if (profile) {
        const toiletQuestions = await toiletQuestionRepository.find({ where: { profileId: req.params.id } });
        const toiletAnswers = await toiletAnswerRepository.find({ where: { profileId: req.params.id } });
        const emergencyStockQuestions = await emergencyStockQuestionRepository.find({ where: { profileId: req.params.id } });
        const emergencyStockAnswers = await emergencyStockAnswerRepository.find({ where: { profileId: req.params.id } });
        const result = {
          profile: {
            ...profile,
          },
          toiletQnA: this.CreateQnA(toiletQuestions, toiletAnswers),
          emergencyStockQnA: this.CreateQnA(emergencyStockQuestions, emergencyStockAnswers),
        };
        return res.status(200).send(result);
      }
      return res.status(404).send(`type ${Profile.name.toString()} with id ${req.params.id} not found`);
    });
  }
  // eslint-disable-next-line class-methods-use-this
  CreateQnA(questions, answers) {
    const qna = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const question of questions) {
      // eslint-disable-next-line no-restricted-syntax
      let found = false;
      for (const answer of answers) {
        if (question.id.toString() === answer.questionId) {
          qna.push({ question, answer });
          found = true;
          break;
        }
      }
      if (!found) {
        qna.push({ question, answer: null });
      }
    }
    return qna;
  }
}
