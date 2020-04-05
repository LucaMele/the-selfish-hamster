// eslint-disable-next-line import/prefer-default-export
export class FoodCategories {
  // eslint-disable-next-line class-methods-use-this
  List() {
    return [
      { index: 0, sort: 1, tag: 'Fruit_And_vegetables', text: 'Fruit and vegetables', durabilityInMonths: 0.5, helpText: 'apple, onions, carrots, potatoes' },
      { index: 1, sort: 2, tag: 'Perishable_Foods', text: 'Perishable Foods', durabilityInMonths: 1, helpText: 'eggs, butter, cheese, milk' },
      { index: 2, sort: 3, tag: 'Non_Perishable_Food', text: 'Non-Perishable Food', durabilityInMonths: 6, helpText: 'crisp bread, pasta, pasta, oat, rice, lentils, almonds' },
      { index: 3, sort: 4, tag: 'Cannes_Food', text: 'Cannes Food', durabilityInMonths: 24, helpText: 'corn, tuna, tomatoes, erbsen' },
      { index: 4, sort: 5, tag: 'Frozen_Food', text: 'Frozen Food', durabilityInMonths: 6, helpText: 'vegetable, spinat, frozen bread, frozen meat' },
      { index: 5, sort: 6, tag: 'Meat_And_Fish', text: 'Meat Fish', durabilityInMonths: 1, helpText: 'Minced meat, Dauerwürste, Trockenfleisch, , ' },
      { index: 6, sort: 7, tag: 'Pet_Food', text: 'Pet Food', durabilityInMonths: 18, helpText: 'trockefutter, dog, cats, ' },
      { index: 7, sort: 8, tag: 'Drinks', text: 'Drinks', durabilityInMonths: 24, helpText: 'Coffeee, cacao, Wasser, tee, fruchtsaft, milk UHT' },
      { index: 8, sort: 9, tag: 'Cooking_Support', text: 'Cooking Support', durabilityInMonths: 24, helpText: 'olive Oil, pepper, salt, spices' },
      { index: 9, sort: 10, tag: 'Baby_Food', text: 'Baby Food', durabilityInMonths: 6, helpText: 'baby milk, baby brei, soup, ' },
    ];
  }

  EstimatesPerWeekFor1Man() {
    return {
      Fruit_And_vegetables: { value: 1.978, durabilityInMonths: 0.5, parts: { apple: 0.890, onions: 0.140, carrots: 0.360, 'bell peppers': 0.490, potatoes: 0.098 } },
      Perishable_Foods: { value: 11.11, durabilityInMonths: 1.0, parts: { eggs: 10.500, butter: 0.045, cheese: 0.140, bread: 0.425 } },
      Non_Perishable_Food: { value: 1.735, durabilityInMonths: 6.0, parts: { 'crisp bread': 0.074, pasta: 0.350, rice: 0.648, almonds: 0.124, cheese: 0.464 } },
      Cannes_Food: { value: 1.614, durabilityInMonths: 24.0, parts: { corn: 0.154, pickles: 0.584, tomatoes: 0.876 } },
      Frozen_Food: { value: 1.06, durabilityInMonths: 6.0, parts: { vegetable: 0.875, tuna: 0.185 } },
      Meat_And_Fish: { value: 0.44, durabilityInMonths: 1.0, parts: { 'minced meat': 0.440 } },
      Pet_Food: { value: 0.28, durabilityInMonths: 18.0, parts: { 'dry food': 0.140, 'wet food': 0.140 } },
      Drinks: { value: 1.7, durabilityInMonths: 24.0, parts: { wasser: 0.210, milk: 1.490 } },
      Cooking_Support: { value: 0.075, durabilityInMonths: 24.0, parts: { 'olive oil': 0.075 } },
      Baby_Food: { value: 0.28, durabilityInMonths: 6.0, parts: { 'baby milk': 0.280 } },
    };
  }

  CategegoryEstimates(nofMen, kidsUnder12, durationQuarantineInDays) {
    const categories = this.List();
    const catNumbers = this.EstimatesPerWeekFor1Man();
    for (const category of categories) {
      const estimatesPerWeek = catNumbers[category.tag].value * (nofMen + (0.5 * kidsUnder12));
      const estimatesPerQuarantineInDays = (estimatesPerWeek * durationQuarantineInDays) / 7;
      category.estimatesPerQuarantineInDays = {
        1: 0.25 * estimatesPerQuarantineInDays,
        2: 1.0 * estimatesPerQuarantineInDays,
        3: 2.0 * estimatesPerQuarantineInDays };
    }
    return categories;
  }
}
