import { HamsterPlace } from '../entity/HamsterPlace';

export class FixedDonationPlaces {
  NewHamster(name, formattedAddress, phone) {
    const hamster = new HamsterPlace();
    hamster.name = name;
    hamster.formattedAddress = formattedAddress;
    hamster.phone = phone;
    return hamster;
  }

  List() {
    return [
      this.NewHamster('The-Selfish-Hamster Foundation', 'Thomas, Sven, Cris, Luca, Lolo, Cédric', ''),
    ];
  }
  EasterEgg() {
    return [
      this.NewHamster('Food Care Schweiz', 'Andwilerstrasse 14, 9200 Gossau', '+41 79 734 89 77'),
    ];
  }
}
