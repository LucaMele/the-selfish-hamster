import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class EmergencyStockAnswer {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id = undefined;
  @Column('int')
  durationQuarantineInDays = 0;
  @Column('varchar')
  hamsterType = '';

  @Column('object')
  categories = [
  ];

  @Column('timestamp')
  timestamp = undefined;

  @Column('varchar')
  profileId = null;
  @Column('varchar')
  questionId = null;
}
