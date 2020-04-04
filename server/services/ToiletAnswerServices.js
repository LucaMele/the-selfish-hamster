import { ObjectID } from 'mongodb';
import { ToiletQuestion } from '../entity/ToiletQuestion';
import { CRUDServices } from '../services/CRUDServices';
import { ToiletAnswer } from '../entity/ToiletAnswer';
import { Profile } from '../entity/Profile';

import { Content } from '../services/AnswerContent';
import { Column } from 'typeorm';

// eslint-disable-next-line import/prefer-default-export
export class ToiletAnswerServices {
  // eslint-disable-next-line class-methods-use-this
  Register(app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const toiletQuestionRepository = connection.getRepository(ToiletQuestion);
    const toiletAnswerRepository = connection.getRepository(ToiletAnswer);
    const modelName = '/toilet/answers';

    new CRUDServices().Register(app, connection, modelName, ToiletAnswer);

    app.post('/toilet/questions/:id/answer', async (req, res) => {
      const question = await toiletQuestionRepository.findOne(new ObjectID(req.params.id));
      const profile = await profileRepository.findOne(new ObjectID(question.profileId));
      // eslint-disable-next-line max-len
      let answer = await toiletAnswerRepository.findOne({ where: { questionId: question.id } });
      answer = this.CalculateToiletUsage(profile, question, answer);
      const resultAnswer = await toiletAnswerRepository.save(answer);
      return res.status(201)
        .send(new Content().Create(resultAnswer, 1, 'Toilet_demo_tag_1', 'Image_Tag_1', 'Content_Tag_1', 'Action_Tag_1'));
    });

    app.get('/toilet/questions/:id/answer', async (req, res) => {
      // eslint-disable-next-line max-len
      const answer = await toiletAnswerRepository.findOne({ where: { questionId: new ObjectID(req.params.id) } });
      return res.status(201)
        .send(new Content().Create(answer, 1, 'Toilet_demo_tag_1', 'Image_Tag_1', 'Content_Tag_1', 'Action_Tag_1'));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  CalculateToiletUsage(profile, question, answer) {
    let currentAnswer = answer;
    if (!answer) {
      currentAnswer = new ToiletAnswer();
    }
    currentAnswer.questionId = question.id.toString();
    currentAnswer.profileId = profile.id.toString();
    currentAnswer.durationQuarantineInDays = question.durationQuarantineInDays;

    // 1 package = 12 roll
    // 1 roll = 200 pieces
    //
    const ONE_ROLL_IN_DAYS = 3;

    let numberOfROlls = question.durationQuarantineInDays / ONE_ROLL_IN_DAYS;
    if (question.nofSheetsPerUse === 'none') {
      numberOfROlls *= 0.5;
    } else if (question.nofSheetsPerUse === 'not-much') {
      numberOfROlls *= 1;
    } else if (question.nofSheetsPerUse === 'average') {
      numberOfROlls *= 1.5;
    } else if (question.nofSheetsPerUse === 'a-lot') {
      numberOfROlls *= 2;
    }

    currentAnswer.nofUsagesPerPerson = Math.ceil(numberOfROlls);

    // from https://www.omnicalculator.com/everyday-life/toilet-paper#how-much-toilet-paper-do-i-need
    currentAnswer.waterConsumption = 140 * numberOfROlls;
    currentAnswer.woodConsumption = Math.ceil(0.7 * numberOfROlls);


    currentAnswer.usagePerQuarantine = Math.ceil(currentAnswer.nofUsagesPerPerson * profile.nofPersons);
    currentAnswer.usagePerDay = Math.ceil(currentAnswer.usagePerQuarantine / question.durationQuarantineInDays);

    if (question.nofToiletRolls > currentAnswer.usagePerQuarantine) {
      currentAnswer.hamsterType = 'above-average';
    } else if (question.nofToiletRolls < currentAnswer.usagePerQuarantine) {
      currentAnswer.hamsterType = 'below-average';
    } else {
      currentAnswer.hamsterType = 'average';
    }

    return currentAnswer;
  }
}
