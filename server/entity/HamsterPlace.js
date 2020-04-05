import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class HamsterPlace {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id = undefined;

  @Column('varchar')
  name = '';

  @Column('varchar')
  formattedAddress = '';
}
