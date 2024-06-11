import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "./entity/book.entity";
import { CreateBookInput } from "./model/create-book.input";
import { UpdateBookInput } from "./model/update-book.input";
import { SearchBookInput } from "./model/search-book.input";

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private repo: Repository<Book>
  ) {}
  async getBooks() {
    const res = await this.repo.find();
    return res;
  }

  async createBooks(request: CreateBookInput) {
    const newBook = {
      book_name: request.book_name,
      book_category: request.book_category,
      book_author: request.book_author,
      book_status: request.book_status,
      created_at: new Date(),
    };

    return this.repo.save(newBook);
  }

  async updateBooks(request: UpdateBookInput) {
    //TODO: remove unused const
    const existingBook = await this.repo.findOne({ where: { id: request.id } });
    const updatedBook = {
      book_name: request.book_name,
      book_category: request.book_category,
      book_author: request.book_author,
      book_status: request.book_status,
      updated_at: new Date(),
    };

    await this.repo.update(request.id, updatedBook);
    return this.repo.findOne({ where: { id: request.id } });
  }

  async getBookByName(request: SearchBookInput) {
    const existingBook = await this.repo.find({
      where: { book_name: request.book_name },
    });
    return existingBook;
  }
} //end
