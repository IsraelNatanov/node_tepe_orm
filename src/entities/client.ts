import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, UpdateDateColumn } from "typeorm";
import { Banker } from "./banker";
import { Transaction } from "./Transaction";
import { Person } from "./utils/Person";

@Entity("client")
export class Client extends Person {
  
  @Column({
    default: true,
    name: "active",
  })
  is_active: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: "simple-array",
    default: [],
  })
  family_members: string[];

  @Column({
    type: "numeric",
  })
  balance: number;
  
  @OneToMany(
    () => Transaction,
    transaction => transaction.client
  )
  transactions: Transaction[];

  @ManyToMany(
    () => Banker
  )
  bankers: Banker[];


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date
}
