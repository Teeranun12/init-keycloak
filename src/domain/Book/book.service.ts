import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "./entity/book.entity";

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
} //end
