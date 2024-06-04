import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: true })
  count: string;

  @Column({ nullable: true })
  nation: string;

  @Column({ nullable: true })
  category: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ nullable: true })
  updated_by: string;
}
