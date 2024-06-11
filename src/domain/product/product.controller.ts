import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import path from "path";
// TODO : Remove this unuse import

@ApiTags("products")
@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }
}
