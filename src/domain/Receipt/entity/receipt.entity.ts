import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  reserve_code: string;

  @Column({ nullable: true })
  reserve_status: string;

  @CreateDateColumn()
  reserve_date: Date;

  @CreateDateColumn()
  reserve_end: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
