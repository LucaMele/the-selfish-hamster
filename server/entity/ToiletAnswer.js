import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class ToiletAnswer {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  _id = undefined;

  @Column('int')
  nofUsagesPerPerson = 0;

  @Column('int')
  usagePerDay = 0;

  @Column('int')
  usagePerQuarantine = 0;

  @Column('int')
  durationQuarantineInDays = 0;

  @Column('varchar')
  questionId = null;
}
