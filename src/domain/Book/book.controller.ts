import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import path from "path";
import { BookService } from "./book.service";

@ApiTags("books")
@Controller("book")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks() {
    return await this.bookService.getBooks();
  }
}
