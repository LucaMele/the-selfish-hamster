import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class User {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id = undefined;

  @Column('varchar')
  firstName = '';

  @Column('varchar')
  lastName = '';
}
