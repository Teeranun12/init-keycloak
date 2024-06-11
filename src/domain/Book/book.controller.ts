import { Body, Controller, Get, Patch, Post, Search } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import path from "path";
import { BookService } from "./book.service";
import { CreateBookInput } from "./model/create-book.input";
import { UpdateBookInput } from "./model/update-book.input";
import { SearchBookInput } from "./model/search-book.input";

@ApiTags("books")
@Controller("book")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get("getBooks")
  async getBooks() {
    return await this.bookService.getBooks();
  }

  @Post("createBooks")
  async createBooks(@Body() input: CreateBookInput) {
    const book = await this.bookService.createBooks(input);
    return book;
  }

  @Patch("updateBooks")
  async updateBooks(@Body() input: UpdateBookInput) {
    const book = await this.bookService.updateBooks(input);
    return book;
  }

  @Get("getBookByName")
  async getBookByName(@Body() input: SearchBookInput) {
    return await this.bookService.getBookByName(input);
  }
}
