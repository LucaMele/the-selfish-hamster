import { Profile } from '../entity/Profile';
import { CRUDServices } from './CRUDServices';


class InjectCRUDActionProfile {

  constructor(app, connection) {
    this.app = app;
    this.connection = connection;
    return this;
  }
  UpdateBeforePost(profile) {
    if (profile.nofAdults > 0 || profile.nofKidsUnder12 > 0) {
      profile.nofPersons = profile.nofAdults + profile.nofKidsUnder12;
    } else {
      profile.nofAdults = profile.nofPersons;
      profile.nofKidsUnder12 = 0;
    }
    return profile;
  }
}

// eslint-disable-next-line import/prefer-default-export
export class ProfileServices {
  Register(prefix, app, connection) {
    const profileRepository = connection.getRepository(Profile);
    const injector = new InjectCRUDActionProfile(app, connection);

    new CRUDServices().Register(prefix, app, connection, '/profiles', Profile, injector);
  }
}
