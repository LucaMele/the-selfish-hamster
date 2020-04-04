import { ToiletQuestion } from '../entity/ToiletQuestion';
import { CRUDServices } from '../services/CRUDServices';
import { ToiletAnswer } from '../entity/ToiletAnswer';
import { Profile } from '../entity/Profile';

// eslint-disable-next-line import/prefer-default-export
export class TotalAnswerServices {
  // eslint-disable-next-line class-methods-use-this
  Register(app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const toiletQuestionRepository = connection.getRepository(ToiletQuestion);
    const toiletAnswerRepository = connection.getRepository(ToiletAnswer);
    const modelName = '/toilet/answers';

    new CRUDServices().Register(app, connection, modelName, ToiletAnswer);

    app.post('/toilet/questions/:id/answer', async (req, res) => {
      const question = await toiletQuestionRepository.findOne(req.params.id);
      const profile = await profileRepository.findOne('5e8847a0d7d5421d81088cba');
      // eslint-disable-next-line max-len
      let answer = await toiletAnswerRepository.findOne({ where: { questionId: question.id } });
      answer = this.CalculateToiletUsage(profile, question, answer);
      const results = await toiletAnswerRepository.save(answer);
      return res.status(201)
        .send(results);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  CalculateToiletUsage(profile, question, answer) {
    let currentAnswer = answer;
    if (!answer) {
      currentAnswer = new ToiletAnswer();
    }
    currentAnswer.durationQuarantineInDays = question.durationQuarantineInDays;
    currentAnswer.nofUsagesPerPerson = Math.floor(Math.random() * 100);
    currentAnswer.nofUsagesPerProfile = currentAnswer.nofUsagesPerPerson * profile.nofPersons;
    currentAnswer.nofUsagesPerQuarantine = currentAnswer.nofUsagesPerProfile * question.durationQuarantineInDays;
    currentAnswer.questionId = question._id;
    return currentAnswer;
  }
}
