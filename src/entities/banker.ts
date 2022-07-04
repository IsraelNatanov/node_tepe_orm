import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, UpdateDateColumn } from "typeorm";
import { Client } from "./client";
import { Person } from "./utils/Person";

@Entity("banker")
export class Banker extends Person {
  
  @Column({
    unique: true,
    length: 10
  })
  employees_number: string

  @ManyToMany(
    () => Client
  )

  @JoinTable({
    name: "bankers_client",
    joinColumn: {
      name: "banker",
      referencedColumnName: 'id'

    },
    inverseJoinColumn: {
      name: "client",
      referencedColumnName: 'id'
    }
    
  })
  clintes: Client[]


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date
}
