import { Client } from '@googlemaps/google-maps-services-js';
import { HamsterPlace } from '../entity/HamsterPlace';

export class GooglePlaces {
  async FindByNameAndLocation(name, zip) {
    const client = new Client({});
    if (zip === '') return [];
    return client
      .textSearch({
        params: {
          // eslint-disable-next-line radix
          query: `${name} ${Math.floor(Number.parseInt(zip) / 10) * 10}`,
          radius: 50000,
          region: 'CH',
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
        timeout: 3000, // milliseconds
      })
      .then(r => r.data.results.map((p) => {
        const place = new HamsterPlace();
        place.name = p.name;
        place.phone = p.formatted_phone_number;
        place.formattedAddress = p.formatted_address;
        return place;
      }))
      .catch(e => {
        console.log(e);
        return [];
      });
  }
}
