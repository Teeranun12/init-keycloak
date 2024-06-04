import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags("products")
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getUsers() {
    return await this.productService.getUsers();
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
      required: [],
    },
  })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body("outputPath") outputPath: string
  ) {
    if (!file) {
      throw new HttpException("No file provided", HttpStatus.BAD_REQUEST);
    }

    outputPath = "./";
    if (!outputPath) {
      throw new HttpException(
        "No output path provided",
        HttpStatus.BAD_REQUEST
      );
    }

    const filePath = await this.productService.convertExcelToPdf(
      file.buffer,
      outputPath
    );
    return { filePath };
  }
}
