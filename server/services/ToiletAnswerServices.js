import { ObjectID } from 'mongodb';
import { ToiletQuestion } from '../entity/ToiletQuestion';
import { CRUDServices } from '../services/CRUDServices';
import { ToiletAnswer } from '../entity/ToiletAnswer';
import { Profile } from '../entity/Profile';

// eslint-disable-next-line import/prefer-default-export
export class ToiletAnswerServices {
  // eslint-disable-next-line class-methods-use-this
  Register(prefix, app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const toiletQuestionRepository = connection.getRepository(ToiletQuestion);
    const toiletAnswerRepository = connection.getRepository(ToiletAnswer);
    const modelName = '/toilet/answers';

    new CRUDServices().Register(prefix, app, connection, modelName, ToiletAnswer);

    app.post(`${prefix}/toilet/questions/:id/answer`, async (req, res) => {
      const question = await toiletQuestionRepository.findOne(new ObjectID(req.params.id));
      const profile = await profileRepository.findOne(new ObjectID(question.profileId));
      // eslint-disable-next-line max-len
      let answer = await toiletAnswerRepository.findOne({ where: { questionId: question.id } });
      answer = this.CalculateToiletUsage(profile, question, answer);
      const resultAnswer = await toiletAnswerRepository.save(answer);
      return res.status(201)
        .send(resultAnswer);
    });

    app.get(`${prefix}/toilet/questions/:id/answer`, async (req, res) => {
      // eslint-disable-next-line max-len
      const resultAnswer = await toiletAnswerRepository.findOne({ where: { questionId: new ObjectID(req.params.id) } });
      return res.status(201)
        .send(resultAnswer);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  CalculateToiletUsage(profile, question, answer) {
    let currentAnswer = answer;
    if (!answer) {
      currentAnswer = new ToiletAnswer();
    }
    currentAnswer.timestamp = new Date();
    currentAnswer.questionId = question.id.toString();
    currentAnswer.profileId = profile.id.toString();
    currentAnswer.durationQuarantineInDays = question.durationQuarantineInDays;

    // 1 package = 12 roll
    // 1 roll = 200 pieces
    //
    const ONE_ROLL_EVERY_DAYS = 3;
    const ONE_PERSON_PER_DAY_TO_TOILET = 1;

    let rollUsageOnePerson = question.durationQuarantineInDays / ONE_ROLL_EVERY_DAYS;
    if (question.nofSheetsPerUse === 'none') {
      rollUsageOnePerson *= 0.5;
    } else if (question.nofSheetsPerUse === 'not-much') {
      rollUsageOnePerson *= 1;
    } else if (question.nofSheetsPerUse === 'average') {
      rollUsageOnePerson *= 1.5;
    } else if (question.nofSheetsPerUse === 'a-lot') {
      rollUsageOnePerson *= 2;
    }

    const NUMBER_OF_ROLL_PER_PACKAGE = 12;
    const totalNumberOFRoll = question.nofToiletRolls * NUMBER_OF_ROLL_PER_PACKAGE;
    const rollUsageFamily = rollUsageOnePerson * profile.nofPersons;
    const rollNotUsed = totalNumberOFRoll - rollUsageFamily;

    // from https://www.omnicalculator.com/everyday-life/toilet-paper#how-much-toilet-paper-do-i-need
    const LITER_OF_WATER_PER_PAPER_ROLL = 140;
    currentAnswer.waterConsumption = LITER_OF_WATER_PER_PAPER_ROLL * rollNotUsed;
    const KG_OF_WOOD_PER_PAPER_ROLL = 0.7;
    currentAnswer.woodConsumption = Math.ceil(KG_OF_WOOD_PER_PAPER_ROLL * rollNotUsed);

    currentAnswer.nofUsagesPerPerson = Math.ceil(rollUsageOnePerson);
    currentAnswer.usagePerQuarantine = rollUsageFamily;

    const numberOFRollPerDayToUseThemAll = rollNotUsed / question.durationQuarantineInDays;

    const ONE_DAY = 1;
    const rollPerDayPersonPerVisit = (ONE_DAY / ONE_ROLL_EVERY_DAYS) * ONE_PERSON_PER_DAY_TO_TOILET;
    currentAnswer.usagePerDay = Math.ceil(numberOFRollPerDayToUseThemAll / rollPerDayPersonPerVisit);

    if (currentAnswer.usagePerDay > 5) {
      currentAnswer.hamsterType = 'above-average';
    } else if (currentAnswer.usagePerDay > 3) {
      currentAnswer.hamsterType = 'below-average';
    } else {
      currentAnswer.hamsterType = 'average';
    }

    return currentAnswer;
  }
}
