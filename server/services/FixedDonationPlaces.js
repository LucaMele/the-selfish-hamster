import { HamsterPlace } from '../entity/HamsterPlace';

export class FixedDonationPlaces {
  NewHamster(name, formattedAddress) {
    const hamster = new HamsterPlace();
    hamster.name = name;
    hamster.formattedAddress = formattedAddress;
    return hamster;
  }

  List() {
    return [
      this.NewHamster('GasseChuchi', 'Geissensteinring 24, 6005 Luzern'),
      this.NewHamster('Food Car Schweiz', 'Andwilerstrasse 14, 9200 Gossau'),
    ];
  }
}
