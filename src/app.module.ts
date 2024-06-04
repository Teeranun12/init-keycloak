import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import typeorm from "./infrastructure/config/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./domain/user/user.module";
import { ProductModule } from "./domain/product/product.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get("typeorm"),
    }),
    UserModule,
    ProductModule,
  ],
  providers: [AppService],
})
export class AppModule {}
