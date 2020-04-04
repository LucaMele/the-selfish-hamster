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
  nofUsagesPerProfile = 0;

  @Column('int')
  nofUsagesPerQuarantine = 0;

  @Column('int')
  durationQuarantineInDays = 0;

  @Column('varchar')
  questionId = null;
}
