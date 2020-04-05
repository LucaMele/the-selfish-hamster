import { User } from '../entity/User';
import { CRUDServices } from './CRUDServices';

// eslint-disable-next-line import/prefer-default-export
export class UserServices {
  Register(prefix, app, connection) {
    const userRepository = connection.getRepository(User);
    new CRUDServices().Register(prefix, app, connection, '/users', User);
  }
}
