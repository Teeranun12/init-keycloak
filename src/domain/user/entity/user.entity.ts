import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ nullable: true })
  updated_by: string;
}
