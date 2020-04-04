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

  // none, not-much, average, a-lot
  @Column('varchar')
  nofSheetsPerUse = "none";

  @Column('varchar')
  profileId = undefined;

  @Column('int')
  recommendation = 0;

  @Column('int')
  waterConsumption = 0;

  @Column('int')
  woodConsumption = 0;
}
