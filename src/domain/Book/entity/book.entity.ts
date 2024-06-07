import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  book_name: string;

  @Column({ nullable: true })
  book_category: number;

  @Column({ nullable: true })
  book_author: number;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  book_status: string;

  @UpdateDateColumn()
  updated_at: Date;
}
