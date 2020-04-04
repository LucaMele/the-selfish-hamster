import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class Profile {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id = undefined;

  @Column('int')
  nofPersons = 0;

  @Column('int')
  nofAdults = 0;

  @Column('int')
  nofKidsUnder12 = 0;

  @Column('varchar')
  zip = 0;

  @Column('varchar')
  emailAddress = '';
}
