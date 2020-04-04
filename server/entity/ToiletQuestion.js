import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class ToiletQuestion {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id = undefined;

  @Column('int')
  durationQuarantineInDays = 14;

  @Column('int')
  nofToiletRolls = 0;

  // none, not-much, average, a-lot
  @Column('varchar')
  nofSheetsPerUse = 'none';

  @Column('varchar')
  profileId = undefined;
}
