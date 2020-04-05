import { GooglePlaces } from '../places/Places';
import { HamsterPlace } from '../entity/HamsterPlace';

// eslint-disable-next-line import/prefer-default-export
export class PlacesServices {
  Register(prefix, app, connection) {
    const placesRepository = connection.getRepository(HamsterPlace);

    // profileId
    app.post(`${prefix}/places/search`, async (req, res) => {
      const data = req.body;
      const result = await new GooglePlaces().FindByNameAndLocation(data.search, data.zip);
      return res.status(200)
        .send(result);
    });
  }
}
