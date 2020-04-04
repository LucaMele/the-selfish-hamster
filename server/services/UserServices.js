import { User } from '../entity/User';
import { CRUDServices } from './CRUDServices';

// eslint-disable-next-line import/prefer-default-export
export class UserServices {
  Register(app, connection) {
    const userRepository = connection.getRepository(User);
    new CRUDServices().Register(app, connection, '/users', User);
  }
}
