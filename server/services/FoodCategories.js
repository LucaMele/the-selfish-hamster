// eslint-disable-next-line import/prefer-default-export
export class FoodCategories {
  // eslint-disable-next-line class-methods-use-this
  List() {
    return [
      { index: 0, sort: 1, tag: 'Fruit_And_vegetables', text: 'Fruit and vegetables', durabilityInMonths: '0.5', helpText: 'apple, onions, carrots, potatoes' },
      { index: 1, sort: 2, tag: 'Perishable_Foods', text: 'Perishable Foods', durabilityInMonths: '1', helpText: 'eggs, butter, cheese, milk' },
      { index: 2, sort: 3, tag: 'Non_Perishable_Food', text: 'Non-Perishable Food', durabilityInMonths: '6', helpText: 'crisp bread, pasta, pasta, oat, rice, lentils, almonds' },
      { index: 3, sort: 4, tag: 'Cannes_Food', text: 'Cannes Food', durabilityInMonths: '24', helpText: 'corn, tuna, tomatoes, erbsen' },
      { index: 4, sort: 5, tag: 'Frozen_Food', text: 'Frozen Food', durabilityInMonths: '6', helpText: 'vegetable, spinat, frozen bread, frozen meat' },
      { index: 5, sort: 6, tag: 'Meat_And_Fish', text: 'Meat Fish', durabilityInMonths: '1', helpText: 'Minced meat, Dauerwürste, Trockenfleisch, , ' },
      { index: 6, sort: 7, tag: 'Pet_Food', text: 'Pet Food', durabilityInMonths: '18', helpText: 'trockefutter, dog, cats, ' },
      { index: 7, sort: 8, tag: 'Drinks', text: 'Drinks', durabilityInMonths: '24', helpText: 'Coffeee, cacao, Wasser, tee, fruchtsaft, milk UHT' },
      { index: 8, sort: 9, tag: 'Cooking_Support', text: 'Cooking Support', durabilityInMonths: '24', helpText: 'olive Oil, pepper, salt, spices' },
      { index: 9, sort: 10, tag: 'Baby_Food', text: 'Baby Food', durabilityInMonths: '6', helpText: 'baby milk, baby brei, soup, ' }];
  }
}
