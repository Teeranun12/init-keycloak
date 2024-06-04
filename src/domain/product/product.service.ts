import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entity/product.entity";
import * as XLSX from "xlsx";
import { PDFDocument } from "pdf-lib";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>
  ) {}
  async getUsers() {
    const res = await this.repo.find();
    console.log("res = ", res);

    return res;
  }

  async convertExcelToPdf(
    excelBuffer: Buffer,
    outputPath: string
  ): Promise<string> {
    const workbook = XLSX.read(excelBuffer, { type: "buffer" });

    const pdfDoc = await PDFDocument.create();

    workbook.SheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: any[][] = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      });

      let page = pdfDoc.addPage();
      const { width, height } = page.getSize();

      let y = height - 30;

      page.drawText(`Sheet: ${sheetName}`, {
        x: 30,
        y,
        size: 16,
      });
      y -= 30;

      const columnHeaders = jsonData[0] as any[];

      let x = 30;
      columnHeaders.forEach((header) => {
        page.drawText(String(header), {
          x,
          y,
          size: 12,
        });
        x += 100;
      });
      y -= 20;

      jsonData.slice(1).forEach((row) => {
        let x = 30;
        row.forEach((cell) => {
          page.drawText(String(cell), {
            x,
            y,
            size: 12,
          });
          x += 100;
        });
        y -= 20;

        if (y < 50) {
          y = height - 30;
          page = pdfDoc.addPage();
        }
      });
    });

    const pdfBytes = await pdfDoc.save();

    if (!outputPath) {
      throw new Error("Output path is undefined");
    }
    const filePath = path.join(outputPath, `output_${Date.now()}.pdf`);
    fs.writeFileSync(filePath, pdfBytes);

    return filePath;
  }
}
