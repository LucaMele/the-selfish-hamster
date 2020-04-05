import { EmergencyStockQuestion } from '../entity/EmergencyStockQuestion';
import { CRUDServices } from '../services/CRUDServices';
import { Profile } from '../entity/Profile';
import { EmergencyStockAnswerServices } from '../services/EmergencyStockAnswerServices';
import { FoodCategories } from '../services/FoodCategories';


class InjectCRUDActionProfile {

  constructor(app, connection) {
    this.app = app;
    this.connection = connection;
    return this;
  }
  UpdateBeforePost(emergencyStockQuestion) {
    var foodList = new FoodCategories().List();
    var emergencyService = new EmergencyStockAnswerServices();

    if (emergencyStockQuestion.categories.length != foodList.length) {
      var newQuestionCategories = [];
      for (const foodCat of foodList) {
        const foundCatValue = emergencyService.GetCategoryByIndex(emergencyStockQuestion.categories, foodCat.index)
        newQuestionCategories.push(
          {
            index: foodCat.index,
            tag: foodCat.tag,
            value: foundCatValue.value,
            included: foundCatValue.included
          }
        );
      }
      emergencyStockQuestion.categories = newQuestionCategories;
    }
    return emergencyStockQuestion;
  }
}


// eslint-disable-next-line import/prefer-default-export
export class EmergencyStockQuestionServices {
  // eslint-disable-next-line class-methods-use-this
  Register(prefix, app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const emergencyStockQuestionRepository = connection.getRepository(EmergencyStockQuestion);
    const modelName = '/emergency-stock/questions';
    new CRUDServices().Register(prefix, app, connection, modelName, EmergencyStockQuestion, new InjectCRUDActionProfile(app, connection));
  }
}
