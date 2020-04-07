import { GooglePlaces } from '../places/Places';
import { HamsterPlace } from '../entity/HamsterPlace';
import { FixedDonationPlaces } from './FixedDonationPlaces';

// eslint-disable-next-line import/prefer-default-export
export class PlacesServices {
  Register(prefix, app, connection) {
    const placesRepository = connection.getRepository(HamsterPlace);

    // profileId
    app.post(`${prefix}/places/search`, async (req, res) => {
      const data = req.body;
      const allPlaces = new FixedDonationPlaces().List();
      for (const r of (new FixedDonationPlaces().EasterEgg())) {
        allPlaces.push(r);
      }
      const result1 = await new GooglePlaces().FindByNameAndLocation('Gassenküche', data.zip);
      for (const r of result1) {
        allPlaces.push(r);
      }
      const result2 = await new GooglePlaces().FindByNameAndLocation(data.search, data.zip);
      for (const r of result2) {
        allPlaces.push(r);
      }
      return res.status(200)
        .send(allPlaces);
    });

    // profileId
    app.post(`${prefix}/places/charity/search`, async (req, res) => {
      const data = req.body;
      const allPlaces = new FixedDonationPlaces().List();
      const result1 = await new GooglePlaces().FindByNameAndLocation('Gassenküche', data.zip);
      for (const r of result1) {
        allPlaces.push(r);
      }
      const result2 = await new GooglePlaces().FindByNameAndLocation("charity", data.zip);
      for (const r of result2) {
        allPlaces.push(r);
      }
      const result3 = new FixedDonationPlaces().EasterEgg();
      for (const r of result3) {
        allPlaces.push(r);
      }
      return res.status(200)
        .send(allPlaces);
    });

  }
}
