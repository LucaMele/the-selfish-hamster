import { ObjectID } from 'mongodb';
import { EmergencyStockQuestion } from '../entity/EmergencyStockQuestion';
import { CRUDServices } from '../services/CRUDServices';
import { EmergencyStockAnswer } from '../entity/EmergencyStockAnswer';
import { Profile } from '../entity/Profile';
import { FoodCategories } from '../services/FoodCategories';

import { Content } from '../services/AnswerContent';

// eslint-disable-next-line import/prefer-default-export
export class EmergencyStockAnswerServices {
  // eslint-disable-next-line class-methods-use-this
  Register(app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const emergencyStockQuestionRepository = connection.getRepository(EmergencyStockQuestion);
    const emergencyStockAnswerRepository = connection.getRepository(EmergencyStockAnswer);
    const modelName = '/emergency-stock/answers';

    new CRUDServices().Register(app, connection, modelName, EmergencyStockAnswer);

    app.post('/emergency-stock/questions/:id/answer', async (req, res) => {
      const question = await emergencyStockQuestionRepository.findOne(new ObjectID(req.params.id));
      const profile = await profileRepository.findOne(new ObjectID(question.profileId));
      // eslint-disable-next-line max-len
      let answer = await emergencyStockAnswerRepository.findOne({ where: { questionId: question.id } });
      answer = this.CalculateEmergencyStockUsage(profile, question, answer);
      const resultAnswer = await emergencyStockAnswerRepository.save(answer);
      return res.status(201)
        .send(resultAnswer);
    });

    app.get('/emergency-stock/questions/:id/answer', async (req, res) => {
      // eslint-disable-next-line max-len
      const resultAnswer = await emergencyStockAnswerRepository.findOne({ where: { questionId: new ObjectID(req.params.id) } });
      return res.status(201)
        .send(resultAnswer);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  CalculateEmergencyStockUsage(profile, question, answer) {
    let currentAnswer = answer;
    if (!answer) {
      currentAnswer = new EmergencyStockAnswer();
    }
    currentAnswer.timestamp = new Date();
    currentAnswer.questionId = question.id.toString();
    currentAnswer.profileId = profile.id.toString();
    currentAnswer.durationQuarantineInDays = question.durationQuarantineInDays;

    const resultCategories = new FoodCategories().List();
    const questionCategories = question.categories;

    const estimates = new FoodCategories().CategegoryEstimates(
      profile.nofAdults, profile.nofKidsUnder12, question.durationQuarantineInDays);
    for (const resultCategory of resultCategories) {
      const foundCatValue = this.GetCategoryByIndex(questionCategories, resultCategory.index);
      resultCategory.value = foundCatValue.value;
      resultCategory.included = foundCatValue.included;
      resultCategory.estimatesPerQuarantineInDays = estimates[resultCategory.index].estimatesPerQuarantineInDays;
    }
    currentAnswer.categories = resultCategories;
    return currentAnswer;
  }

  GetCategoryByIndex(categories, index) {
    for (const cat of categories) {
      if (cat.index === index) {
        return { value: cat.value, included: cat.included };
      }
    }
    return { index: 2, included: true };
  }
}
