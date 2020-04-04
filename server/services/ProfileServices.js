import { Profile } from '../entity/Profile';
import { CRUDServices } from './CRUDServices';

// eslint-disable-next-line import/prefer-default-export
export class ProfileServices {
  Register(app, connection) {
    const profileRepository = connection.getRepository(Profile);
    new CRUDServices().Register(app, connection, '/profiles', Profile);
  }
}
