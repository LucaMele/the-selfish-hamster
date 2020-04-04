import { ToiletQuestion } from '../entity/ToiletQuestion';
import { CRUDServices } from '../services/CRUDServices';

// eslint-disable-next-line import/prefer-default-export
export class ToiletQuestionServices {
  // eslint-disable-next-line class-methods-use-this
  Register(app, connection) {
    const toiletQuestionRepository = connection.getRepository(ToiletQuestion);
    new CRUDServices().Register(app, connection, '/toilet/questions', ToiletQuestion);
  }
}
