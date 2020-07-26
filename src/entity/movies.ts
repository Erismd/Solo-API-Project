import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column({ nullable: false })
  public title: string;

  @Column()
  public director: string;

  @Column()
  public released_date: Date;

  @Column()
  public rating: number;

  @Column()
  public country: string;

  @Column()
  public reviews: string;
}
