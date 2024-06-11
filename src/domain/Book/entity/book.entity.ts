import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
// TODO : Remove this unse import
@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ nullable: true })
  book_name: string;

  @Column({ nullable: true })
  book_category: string;

  @Column({ nullable: true })
  book_author: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  book_status: string;

  @UpdateDateColumn()
  updated_at: Date;
}
