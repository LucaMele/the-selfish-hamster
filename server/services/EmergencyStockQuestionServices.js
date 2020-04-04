import { EmergencyStockQuestion } from '../entity/EmergencyStockQuestion';
import { CRUDServices } from '../services/CRUDServices';
import { Profile } from '../entity/Profile';

import { Content } from '../services/AnswerContent';

// eslint-disable-next-line import/prefer-default-export
export class EmergencyStockQuestionServices {
  // eslint-disable-next-line class-methods-use-this
  Register(app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const emergencyStockQuestionRepository = connection.getRepository(EmergencyStockQuestion);

    const modelName = '/emergency-stock/questions';
    new CRUDServices().Register(app, connection, modelName, EmergencyStockQuestion);
  }
}
