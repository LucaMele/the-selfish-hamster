import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class EmergencyStockQuestion {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id = undefined;

  @Column('int')
  durationQuarantineInDays = 14;

  // noinfo, meat-lover, vegan, vegetarian
  @Column('varchar')
  nutritionType = 'noinfo';

  @Column('varchar')
  dateOfPurchase = '2020-04-01';

  @Column('object')
  categories = [
    {
      sort: 1,
      name: 'Category.FruitAndVegetables',
      value: 1,
      included: true,
    },
  ];

  @Column('varchar')
  profileId = undefined;
}
