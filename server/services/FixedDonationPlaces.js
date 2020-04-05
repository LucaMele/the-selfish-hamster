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
      this.NewHamster('Food Care Schweiz', 'Andwilerstrasse 14, 9200 Gossau'),
    ];
  }
  EasterEgg() {
    return [
      this.NewHamster('The-Selfish-Hamster Foundation', 'Thomas, Sven, Pixxel, Luca, Lolo, Cedric'),
    ];
  }
}
