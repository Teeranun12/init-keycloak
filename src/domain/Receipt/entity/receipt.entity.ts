import { Book } from "src/domain/Book/entity/book.entity";
import { Client } from "src/domain/Client/entity/client.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
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

  // @JoinColumn({ name: "client_id" })
  // client: Client;

  @ManyToOne(() => Client)
  @JoinColumn({ name: "client_id" })
  client: Client;

  @Column({ nullable: true })
  client_id: string;

  // @JoinColumn({ name: "book_id" })
  // book: Book;
  @ManyToOne(() => Book)
  @JoinColumn({ name: "book_id" })
  book: Book;

  @Column({ nullable: true })
  book_id: string;
}
