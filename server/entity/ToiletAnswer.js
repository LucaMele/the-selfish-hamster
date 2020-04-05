import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class ToiletAnswer {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id = undefined;

  @Column('int')
  nofUsagesPerPerson = 0;

  @Column('int')
  usagePerDay = 0;

  @Column('int')
  usagePerQuarantine = 0;

  @Column('int')
  durationQuarantineInDays = 0;

  // below-average, average, above-average
  @Column('varchar')
  hamsterType = 'average';

  @Column('int')
  waterConsumption = 0;

  @Column('int')
  woodConsumption = 0;

  @Column('timestamp')
  timestamp = undefined;

  @Column('varchar')
  questionId = null;

  @Column('varchar')
  profileId = null;
}
