import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class ToiletQuestion {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  _id = undefined;

  @Column('int')
  durationQuarantineInDays = 14;

  @Column('int')
  nofToiletRolls = 0;

  @Column('int')
  nofSheetsPerUseSmall = 2;

  @Column('int')
  nofSheetsPerUseLarge = 5;
}
