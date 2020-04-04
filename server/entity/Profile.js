import {Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn} from "typeorm";

@Entity()
export class Profile {

  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  _id = undefined;

  @Column("int")
  nofPersons = 0;

  @Column("int")
  nofAdults = 0;

  @Column("int")
  nofKidsUnder12 = 0;

  @Column("varchar")
  zip = 0;

  @Column("varchar")
  emailAddress = "";

}
